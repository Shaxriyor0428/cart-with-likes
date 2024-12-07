import React from "react";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#272727] h-[383px] w-full">
        <div className="container pt-[60px]">
          <div className="h-1 w-full bg-white"></div>
        </div>

        <div className="container grid grid-cols-2">
          <div className="col-span-1">
            <img src={footer} alt="footer image" className="" />
            <p className="text-white w-1/2">
              Your natural candle made for your home and for your wellness.
            </p>
          </div>

          <div className="text-white grid grid-cols-3 pt-10">
            <div className="flex flex-col gap-6">
              <p className="text-green-500">Disovery</p>
              <p>New season</p>
              <p>Most searched</p>
              <p>Most selled</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-green-500">About</p>
              <p>Help</p>
              <p>Shipping</p>
              <p>Afficliate</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-green-500">Info</p>
              <p>Contact us</p>
              <p>Privacy Policie</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-20 bg-[#E5E5E5]">
        <div className="container flex justify-between items-center h-full text-[#5E6E89]">
          <p>©Candleaf All Rights Reserved.</p>
          <p className=" select-none">Designed with ❤️ by uxbly</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
