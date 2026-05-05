// import { JSX } from "react";

export default function Footer(){
  return (
    <div className="bg-dark text-gray-400 px-[16px] sm:px-[24px] lg:px-[48px] py-[40px] mt-[40px] w-full">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-[12px]">
    <h1 className="text-pri text-[16px]">Shopify</h1>

        <h1 className="text-[14px]">© 2024 ALL RIGHTS RESERVED</h1>

        <div className="flex flex-wrap gap-[12px] sm:gap-[24px] text-[13px] sm:text-[14px]">
          <a href="#">Sustainability</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
          <a href="#">Shipping</a>
        </div>

        <div className="flex gap-[16px] text-[18px]">
          <span>🌐</span>
          <span>📸</span>
        </div>
      </div>
    </div>
  );
}
