import { ReactLocation, Route } from "@tanstack/react-location";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from './components/Signup';

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />
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
