import{route,routes} from "react-router-dom";
import loginPage from "./loginPage"
import homePage from "./homePage";
import oneBox from "../page/oneBox";

const MainroutePage=()=>{
    return(
    <>
       <routes>
       <route path="/" element={<indexes />} />
       <route path="/" element={<oneBox/>}/>
          
       </routes>
    
    </>
    );

};

export default MainroutePage;