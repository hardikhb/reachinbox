import homePage from "../component/homePage";
import "../App.css";
import logo from "../asset/No Message illustration.svg";
import { themecontext} from "../context";
import { useContext} from "react";

const index = () => {
    const theme = useContext(themecontext);
    const darkmode = theme.state.darkmode;
    return (
       <>
         <div className="flex flex-col">
        <div className="relative">
          <homePage />
        </div>
        <div className=" index-page-height flex items-center justify-center bg-black " style={{ background: darkMode ? "white" : "#101113" }}>
          <div className=" flex items-center justify-center flex-col w-[600px]">
            <div>
              <img src={logo} className=" w-[200px] object-cover" alt="logo" />
            </div>
            <div className="text-white w-full flex items-center justify-center flex-col  mt-[40px]">
              <div>
                {" "}
                <p className="font-[600]" style={{ color: darkMode ? "#101113" : "white" }}>
                  It’s the beginning of a legendary sales pipeline{" "}
                </p>
              </div>

              <div className="w-[250px] mt-[10px] text-[#888a8e]">
                <p>When you have inbound E-mails you will see them here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        
       </>
    )
}