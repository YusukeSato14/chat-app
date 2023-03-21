import { Avatar, Box, Button, Card, CardBody, CardHeader, chakra, Heading, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import { getDatabase, push, ref } from "@firebase/database";
import { Link } from "@tanstack/react-location";
import { FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FormEvent, useState } from "react";
import { AuthGuard } from "../feature/auth/component/AuthGuard/AuthGuard";

interface Room {
  id: number;
  icon: string;
  name: string;
}

export const Rooms = (): JSX.Element => {
  const auth = getAuth();
  const userId = auth?.currentUser?.uid;
  const [room, setRoom] = useState<string>('');
  const rooms: Room[] = [
    {
      id: 1,
      icon: 'url',
      name: 'なまえ'
    },
    {
      id: 2,
      icon: 'url',
      name: 'さとう'
    },
    {
      id: 3,
      icon: 'url',
      name: 'おしゃべり部屋'
    }
  ];

  const handleCreateRoom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const db = getDatabase();
      const dbRef = ref(db, 'rooms');
      await push(dbRef, {
        room,
      });
      setRoom('');
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  }

  return (
    <AuthGuard>
      <Card>
        <CardHeader>
          <Heading size="md">uid: {userId} フレンド</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {rooms.map((room) => {
              return (
                <Box>
                  <Link to={"/chat/"+room.id}>
                    <Stack spacing={8} direction="row" align="center">
                      <Avatar src={room.icon} />
                      <Text mt={4}>{room.name}</Text>
                    </Stack>
                  </Link>
                </Box>
              )
            })}
          </Stack>
        </CardBody>
      </Card>
      <chakra.form display={'flex'} gap={2} onSubmit={handleCreateRoom}>
        <Input value={room} onChange={(e) => setRoom(e.target.value)} />
        <Button type={'submit'}>送信</Button>
      </chakra.form>
    </AuthGuard>
  );
}

export default Rooms;
