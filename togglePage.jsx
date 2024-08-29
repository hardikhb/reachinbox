import React from "react";
import "../styles/toggle.css";

//import Sun from "@iconscout/react-unicons/icons/uli-sun";
//import Moon from "@iconscout/react-unicons/icons/uli-moon";


import {themeContext} from "../context";
import {useContext} from "react";

function TogglePage(){
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;

    const handleClick = () =>{
        theme.dispatch({type :"toggle"});
    };

    return(
        <div className ="toggle w-[34px]" onclick={handleClick}>

        {/*<p>sun</p>
        <p>moon</p>*/}
          <div
        className="t-button"
        style={darkmode ? {left :"4px"} : {right : "4px"}}>

          </div>
        </div>
    );
    
}
export default TogglePage;