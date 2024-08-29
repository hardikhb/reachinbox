
import './App.css';
import{route,routes} from "react-router-dom";
import Login from './component/loginPage';
import SidebarPage from './component/sidebarPage';

import { useAuth0 } from "@auth0/auth0-react";

import MainroutePage from './component/mainroutePage';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      className="App ">
      {isAuthenticated ? (
        <div className="flex">
          <sidebarPage />
          <mainroutePage/>
        </div>
      ) : (
        <loginPage />
      )}
    </div>
  );
}

export default App;





