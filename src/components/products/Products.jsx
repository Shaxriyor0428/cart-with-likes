import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";
import { TiShoppingCart } from "react-icons/ti";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Products = ({ data, title }) => {
  const navigate = useNavigate();
  const { setWishlist, wishlist, cart, setCart } = useStateValue();

  const handleLike = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setWishlist((prev) => [...prev, product]);
    } else {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const handleAddToCart = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...prod, amount: 1 }]);
    }
    toast.success("Tovar savatga qo'shildi !", {
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

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-all"
    >
      <div className="w-full h-64 relative group">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={product.thumbnail}
          alt={product.title}
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-2xl text-red-500 transition-transform duration-300 ease-in-out group-hover:scale-110"
        >
          {wishlist?.some((item) => item.id === product.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute top-10 right-3 text-2xl text-green-500 transition-transform duration-300 ease-in-out group-hover:scale-110"
        >
          <TiShoppingCart />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p
          title={product.description}
          className="text-sm text-gray-600 mt-2 line-clamp-2"
        >
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">
            {product.price} $
          </span>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold  mb-6 text-center text-green-500">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productItems}
      </div>
    </div>
  );
};

export default Products;
