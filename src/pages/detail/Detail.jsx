import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/index";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";
import { toast, Bounce } from "react-toastify";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { wishlist, setWishlist, cart, setCart } = useStateValue();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center min-h-56 py-24">Loading ...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <p>{error?.message}</p>
      </div>
    );
  }

  const handleAddToCart = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...prod, amount: 1 }]);
    }
    toast.success("Tovar savatga qo'shildi!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleLike = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setWishlist((prev) => [...prev, product]);
    } else {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  return (
    <div className="container py-8 grid lg:grid-cols-2 gap-8">
      {/* Mahsulot Rasmlari */}
      <div>
        <div className="border rounded-lg">
          <img
            src={data?.images[index]}
            alt={data?.title}
            className="w-full  object-contain h-[400px]"
          />
        </div>
        <div className="flex mt-4 gap-4">
          {
            data?.images.length > 1 ? 
            data?.images?.map((url, inx) => (
              <img
                key={inx}
                src={url}
                alt={data?.title}
                onClick={() => setIndex(inx)}
                className={`w-20 h-20 rounded-lg cursor-pointer  ${
                  index === inx ? "border-2 border-green-500" : "border"
                }`}
              />
            )) : ""
          }
        </div>
      </div>

      {/* Mahsulot Tafsilotlari */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
        <p className="text-xl text-gray-600">{data?.description}</p>
        <p className="text-2xl font-semibold text-green-600">
          {data?.price} so'm
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleLike(data)}
            className="text-2xl text-red-500 focus:outline-none"
          >
            {wishlist?.some((item) => item.id === data?.id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <span className="text-gray-500">
            {wishlist?.some((item) => item.id === data?.id)
              ? "Sevimlilar ro‘yxatida"
              : "Sevimlilar ro‘yxatiga qo‘shish"}
          </span>
        </div>
        <button
          onClick={() => handleAddToCart(data)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-medium"
        >
          Savatga qo‘shish
        </button>
      </div>
    </div>
  );
};

export default Detail;
