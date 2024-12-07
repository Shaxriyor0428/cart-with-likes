import React, { memo, useRef } from "react";
import { PROMOCODES } from "../../static";

const Promocode = ({ promoCodeStatus }) => {
  const promocode = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (PROMOCODES.includes(promocode.current.value.toUpperCase())) {
      promoCodeStatus({ msg: "Muvaffaqiyatli ishladi", error: false, success: true });
    } else {
      promoCodeStatus({ msg: "Promocode xato ekan", error: true, success: false });
    }
    promocode.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <input
        ref={promocode}
        type="text"
        placeholder="Enter promocode"
        className="focus:border-indigo-500 border outline-none rounded-lg py-1 px-2 mr-2"
      />
      <button className="py-1 px-4 bg-green-500 rounded-lg text-white">
        Send
      </button>
    </form>
  );
};

export default memo(Promocode);
