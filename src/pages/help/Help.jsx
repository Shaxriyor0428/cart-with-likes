// import React, { useReducer } from "react";
// import { intitalState, reducer } from "./reducer";

// const Help = () => {
//   const [state, dispatch] = useReducer(reducer, intitalState);
//   return (
//     <div>
//       <h2>Help {state.count} </h2>
//       <h2>Help {state.str} </h2>
//       <div className="flex gap-4">
//         <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
//         <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
//       </div>
//     </div>
//   );
// };

// export default Help;

import React from "react";

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        How Can We Help You?
      </h2>

      <p className="text-center text-lg text-gray-600 mb-8">
        Below are some common questions and issues. If you can't find what
        you're looking for, feel free to contact us!
      </p>

      <div className="space-y-6">
        <div className="border p-4 rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            1. How to Create an Account?
          </h3>
          <p className="text-gray-700">
            To create an account, simply click the "Sign Up" button on the home
            page. Fill in your email, password, and other necessary details,
            then click "Create Account". After that, you can log in and access
            all our features.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            2. How to Reset My Password?
          </h3>
          <p className="text-gray-700">
            If you’ve forgotten your password, click the "Forgot Password?" link
            on the login page. Enter your email address, and we’ll send you a
            reset link to create a new password.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            3. How to Contact Support?
          </h3>
          <p className="text-gray-700">
            You can contact our support team by visiting the "Contact" page,
            where you can fill out a form with your question or issue. We strive
            to respond within 24 hours.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            4. How to Delete My Account?
          </h3>
          <p className="text-gray-700">
            If you wish to delete your account, please contact us via the
            "Contact" page. After verifying your identity, we will proceed with
            the account deletion process.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Still need help?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Contact Us
          </span>
        </p>
      </div>
    </div>
  );
};

export default Help;

