import logo from "../asset/emailLogo.svg";
import home from "../asset/Home.svg";
import Contact from "../asset/contact.svg";
import Email from "../asset/email.svg";
import Menu from "../asset/menu.svg";
import EmailStore from "../asset/email store.svg";
import Chart from "../asset/bar_chart.svg";
import Send from "../asset/send.svg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState } from "react";
import { themecontext } from "../context";


import homePage from "./homePage";

const   SidebarPage = () => {
    return (
        <div className="flex">
           <main className="h-[100vh] w-14 p-3   bg-[#101113]">
             <div className=" pb-5  h-[50px] flex items-center justify-center">
                <div>
                  <img src={logo} alt="logo" className=" object-cover" />
                </div>
            </div>

        <div className=" pt-10 h-[600px]">
          <div className="flex items-center justify-start flex-col gap-7  h-[500px]">
            <Link to="/logged-page">  <img src={home} alt="home logo" /></Link>
            <img src={Contact} alt="contact-logo" />
            <img src={Email} alt="email-logo" />
            <img src={Send} alt="send-logo" />
            <Link to="/oneBox"><img src={Menu} alt="menu-logo" /></Link>
            
            <img src={EmailStore} alt="email-store-logo" />
            <img src={Chart} alt="chart-logo" />
          </div>
        </div>
        <div className="mt-5  rounded-full  bg-[#054F31]">
    <div className=" rounded-full   text-black flex items-center justify-center">
        <p className="p-1">Hb</p>
    </div>
</div>
      </main>
     
    </div>
  );
};

export default SidebarPage;

          

    

