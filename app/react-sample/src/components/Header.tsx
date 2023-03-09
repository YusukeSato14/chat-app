import { Button, chakra, Container, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-location";
import { FirebaseError } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "../feature/auth/provider/AuthProvider";

export const Header = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      const auth = getAuth();
      await signOut(auth);
      toast({
        title: 'ログアウトしました。',
        status: 'success',
        position: 'top',
      });
      navigate({ to: './', replace: true });
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <chakra.header py={4} bgColor={'blue.600'}>
      <Container maxW={'container.lg'}>
        <Heading color={'white'}>
          {user ? (
            <Button colorScheme={'teal'} onClick={handleSignOut}>
              サインアウト
            </Button>
          ) : (
            'ログアウト中'
          )}
        </Heading>
      </Container>
    </chakra.header>
  )
}