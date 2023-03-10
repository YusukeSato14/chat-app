import { ReactLocation, Route } from "@tanstack/react-location";
import Chat from "./components/Chat";
import Signin from "./components/Signin";
import Signup from './components/Signup';

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <Chat />
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
