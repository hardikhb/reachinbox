import homePage from "../component/homePage";
import "../App.css";
import { useContext } from "react";
import { themeContext } from "../context";
import { themeProvider } from '../context';
import Lists from "./list";
import Threads from "./threademail";
import Details from "./details";


const OneBox = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;

    return (
      <>
       <div className="flex flex-col">
         <div>
          {/* <Home /> */}
          <homePage/>
        </div>
        <div
          style={{ background: darkMode ? "white" : "black" }}
          className="bg-black index-page-height flex justify-start"
        >
          <Lists/>
          <Threads />
          <Details/>{" "}
        </div>
      </div>
    </>
    );
};

export default OneBox;