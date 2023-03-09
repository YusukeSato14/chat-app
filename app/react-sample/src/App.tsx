import { location, routes } from './Router';
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import { Outlet, Router } from '@tanstack/react-location';
import { Header } from './components/Header';

function App() {
  return (
    <Router location={location} routes={routes} >
      <Header />
      <Outlet />
      <ReactLocationDevtools />
    </Router>
  );
}

export default App;
