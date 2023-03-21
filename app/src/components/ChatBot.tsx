import { getDatabase, push, ref } from '@firebase/database';
import { FirebaseError } from "firebase/app";
import { FormEvent, useState } from "react";
import Chat from "./Chat";

export const ChatBot = () => {
  const [message, setMessage] =useState<string>('');

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const db = getDatabase();
      const dbRef = ref(db, 'chat');
      await push(dbRef, {
        message,
      });
      setMessage('');
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  }

  return (
    <Chat handleSendMessage={handleSendMessage} messageState={{message, setMessage}} />
  );
};

export default ChatBot;
