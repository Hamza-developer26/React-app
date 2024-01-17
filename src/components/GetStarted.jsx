import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#DEF9FA] via-[#9DEDF0]  to-[#33BBCF] p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="bg-gradient-to-bl from-[#DEF9FA] via-[#9DEDF0]  to-[#33BBCF] text-transparent bg-clip-text">Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />

        

      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="bg-gradient-to-bl from-[#DEF9FA] via-[#9DEDF0]  to-[#33BBCF] text-transparent bg-clip-text">Started</span>
          

        </p>
    </div>
  </div>
);

export default GetStarted;
