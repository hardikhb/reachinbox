import { useContext}from "react";
import { themeContext } from "../context";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import "../App.css";

const Details = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;

    return (

      <>
          <section className=" right-side left w-[317px] mt-10 pl-3 overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black] ">
        <div
          className=" pt-2 pb-2 w-[310px] text-white text-start rounded-md font-[600] "
          style={{ background: darkmode ? "#ECEFF3" : "#23272C" }}
        >
          <p
            className=" pl-5"
            style={{ color: darkmode ? "#0a0a18" : "white" }}
          >
            Lead Details
          </p>
        </div>
        <div className="text-white pr-3 mt-3 ">
          <div className="flex items-center justify-between text-[16px] mt-5">
            <p style={{ color: darkmode ? "#4f4f51" : "white" }}>Name</p>
            <p style={{ color: darkmode ? "black" : "#B9B9B9" }}>orLand</p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkmode ? "#4f4f51" : "white" }}>Contact No</p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkmode ? "black" : "#B9B9B9" }}
            >
              +91 783 489 3706
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkmode ? "#4f4f51" : "white" }}>Email ID</p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkmode ? "black" : "#B9B9B9" }}
            >
              HARDIK@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkmode ? "#4f4f51" : "white" }}>Linkdein</p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkmode ? "black" : "#B9B9B9" }}
            >
              linkdein/hardik/bhardwaj
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkmode ? "#4f4f51" : "white" }}>
              Company Name
            </p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkmode ? "black" : "#B9B9B9" }}
            >
              Reachinbox.ai
            </p>
          </div>
        </div>
        <div
          className=" pt-2 pb-2 pl-5 w-[310px] text-white text-start rounded-md mt-10 font-[700] "
          style={{ background: darkmode ? "#ECEFF3" : "#23272C" }}
        >
          <p style={{ color: darkmode ? "#454F5B" : "white" }}> Your Activites</p>
        </div>
        <div className="">
          <p
            className="text-white text-left pl-5 mt-5 font-[600] text-2xl "
            style={{ color: darkmode ? "#172B4D" : "white" }}
          >
            Campaign Name
          </p>
          <div className="flex items-center justify-start gap-3 text-[14px] pl-4 text-white mt-10 mb-5">
            <p style={{ color: darkmode ? "#172B4D" : "white" }}>
              {" "}
              <span className="font-[600]">3</span> Steps{" "}
            </p>{" "}
            <hr className="vertical-line" />
            <p style={{ color: darkmode ? "#172B4D" : "white" }}>
              {" "}
              <span className="font-[600]">6</span> Days in Sequence
            </p>
          </div>

          <div
            className="flex flex-col  "
            style={{ color: darkmode ? "#4f4f51" : "white" }}
          >
            <div className="flex">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12   rounded-full flex items-center justify-center"
                  style={{
                    border: darkmode ? "1px solid #4f4f51" : " 1px solid white",
                    
                    }} >
                  <outline size={20} />
                </div>
                <div className="h-14 w-1 flex "></div>
              </div>

              <p className="ml-3  font-xl">
                Step 1: Email <br />
                <span className="flex ">
                  {" "}
                  <send className="m-2 font-light" /> Send 28th , Aug
                </span>
              </p>
            </div>
          </div>

          <div
            className="flex flex-col "
            style={{ color: darkmode ? "#4f4f51" : "white" }}
          >
            <div className="flex">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12  rounded-full flex items-center justify-center"
                  style={{
                    border: darkmode ? "1px solid #4f4f51" : " 1px solid white",
                  }}
                >
                  <outline size={20} />
                </div>
                <div className="h-14 w-1 flex "></div>
              </div>
              <p className="ml-3  font-xl">
                Step 2: Email <br />
                <span className="flex">
                  {" "}
                  <open className="m-2 text-yellow-300" /> Open 31th, Aug
                </span>
              </p>
            </div>
          </div>

          <div
            className="flex flex-col "
            style={{ color: darkmode ? "#4f4f51" : "white" }}
          >
            <div className="flex">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12   rounded-full flex items-center justify-center"
                  style={{
                    border: darkmode ? "1px solid #4f4f51" : " 1px solid white",
                  }}
                >
                  <outline size={20} />
                </div>
                <div className={`h-14 w-1 flex `}></div>
              </div>
              <p className="ml-3  font-xl">
                Step 3: Email <br />
                <span className="flex">
                  {" "}
                  <open className="m-2 text-yellow-300" /> Open 29th, Aug
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
        
      
      </>
    );
};

export default Details;