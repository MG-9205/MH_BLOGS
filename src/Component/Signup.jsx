import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../Context/LoginContext/LoginContext";
import UserContext from "../Context/userContext/userContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/config";

export default function Signup() {
  const active = useContext(LoginContext);
  const User = useContext(UserContext);
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const switchToSignin = () => {
    active.Controller("Login");
  };
  function handleCerdentails(e) {
    setError("");
    active.setUserCredentials({
      ...active.userCredentials,
      [e.target.name]: [e.target.value],
    });
  }

  function handleSignup(e) {
    const email = active.userCredentials.email[0];
    const password = active.userCredentials.password[0];
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        if (email && email.includes("@")) {
          const username = email.split("@")[0];
          User.SetUser(username);
          Navigate("/");
        } else {
          // Handle invalid email format
          setError("Invalid email format");
        }
      })
      .catch((error) => {
        setError("please Enter Valid Email Id");
      });
  }
  return (
    <div className="flex justify-center items-center flex-col border-2 w-[85vw] md:w-[420px] pb-5 rounded-[10px] ">
      <div className="w-full  flex flex-col justify-end  pb-20 mb-7 bg-blue-500 rounded-br-[150px] ">
        <div className="w-full flex flex-col  items-start ml-5 mt-2 ">
          <p className="text-4xl font-semibold  text-white z-10 text-left">
            Create{" "}
          </p>
          <p className="text-4xl font-semibold  text-white z-10 text-left">
            Account
          </p>
          <p className="text-xm font-medium text-white mt-4 z-10 text-left">
            Please sign-up to continue!
          </p>
        </div>
      </div>

      <div className="w-[80vw] md:w-[400px]  flex flex-col items-center mt-10 mx-3">
        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              handleCerdentails(e);
            }}
            className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handleCerdentails(e);
            }}
            className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-blue-400"
          />
        </div>
        <div className="text-red-600 text-[15px]">{error && error}</div>
        <button
          onClick={(e) => {
            handleSignup(e);
          }}
          type="submit"
          className="w-[80%] max-w-150 px-4 py-2 text-white text-base font-semibold rounded-full cursor-pointer transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:brightness-103 my-5"
        >
          SignUp
        </button>
        <span className="text-[1.3rem] text-gray-400 font-medium ">
          Already have an account?
          <Link
            onClick={switchToSignin}
            className="text-[1.2rem] text-blue-500 font-medium underline border-b border-dashed border-blue-400 pl-2"
          >
            Signin
          </Link>
        </span>
      </div>
    </div>
  );
}
