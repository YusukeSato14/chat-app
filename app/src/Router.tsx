import { ReactLocation, Route } from "@tanstack/react-location";
import Chat from "./components/Chat";
import FriendChat from "./components/FrendChat";
import Rooms from "./components/Rooms";
import Signin from "./components/Signin";
import Signup from './components/Signup';

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <FriendChat />
  },
  {
    path: 'rooms',
    element: <Rooms />
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'signin',
    element: <Signin />
  }
];
