import bgImage from "../../assets/bgimage.png";
import heroImage from "../../assets/hero.png";
import React, { memo, useEffect, useState } from "react";
import Products from "../../components/products/Products";
import axios from "../../api";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("/products").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[700px] w-full"
      >
        <div className="container h-full flex justify-center items-center">
          <div className="bg-[#F7F8FACC] h-[349px] w-[730px] flex flex-col justify-center items-center gap-8">
            <div>
              <img src={heroImage} alt="" />
            </div>
            <p className="font-normal text-[18px] text-center w-[75%]">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
            <button className="font-medium text-[20px] leading-6 text-center text-white py-2 px-[44px] bg-[#56B280] rounded-md">
              Discovery our collection
            </button>
          </div>
        </div>
      </section>

      <Products title={"Products"} data={data?.products} />
    </>
  );
};

export default memo(Home);
