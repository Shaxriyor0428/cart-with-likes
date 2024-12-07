import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Biz bilan bog‘laning
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Aloqa Formasi */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Murojaat qiling
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Ism
              </label>
              <input
                type="text"
                id="name"
                placeholder="Ismingizni kiriting"
                className="w-full border outline-none border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
              
                type="email"
                id="email"
                placeholder="Email manzilingiz"
                className="w-full border outline-none border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Xabar
              </label>
              <textarea
              
                id="message"
                rows="4"
                placeholder="Xabaringizni yozing"
                className="w-full border outline-none  border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-medium"
            >
              Yuborish
            </button>
          </form>
        </div>

        {/* Kompaniya Ma'lumotlari */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Bizning ma'lumotlar
          </h2>
          <p className="text-gray-600 mb-4">
            Sizga yordam berishdan doimo mamnunmiz. Biz bilan bog‘lanish uchun
            quyidagi ma'lumotlardan foydalanishingiz mumkin:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaPhone className="text-green-500 mr-4" />
              <span className="text-gray-800">+998 90 123 45 67</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-green-500 mr-4" />
              <span className="text-gray-800">info@company.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-green-500 mr-4" />
              <span className="text-gray-800">
                Toshkent, Mirobod tumani, Mustaqillik ko‘chasi, 10
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
