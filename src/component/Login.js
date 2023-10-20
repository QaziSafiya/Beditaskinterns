import React, { useRef } from "react";
import { useState } from "react";
import { validateData } from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signtoggle, setSigntoggle] = useState(true);

  const [errorvalid, setErrorvalid] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handlesignin = () => {
    setSigntoggle(!signtoggle);
  };

  const handleform = () => {
    console.log(email.current.value, password.current.value);

    const message = validateData(email.current.value, password.current.value);
    setErrorvalid(message);

    if (message) return;
    if (!signtoggle) {
      // signup

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorvalid(errorCode + errorMessage);
        });
    } else {
      //signin

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorvalid(errorCode + errorMessage);
        });
    }
  };
  return (
    <div className="w-full h-screen flex bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-yellow-500 to-90% ">
      <div className=" max-w-[1240px] w-full h-full flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=" "
          className="relative w-[400px] lg:ml-[200px] mt-[90px] bg-black/80"
        >
          {signtoggle ? (
            <h1 className="text-white mt-8 mx-10 text-2xl">Sign In</h1>
          ) : (
            <h1 className="text-white mt-8 mx-10 text-2xl">Sign up</h1>
          )}

          {!signtoggle && (
            <input
              className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm bg-gray-800 "
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm bg-gray-800 text-white "
            type="text"
            placeholder="Email or Phone number"
          />

          <input
            ref={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="p-2 mt-9 ml-10 text-center w-[300px] rounded-sm text-gray-400 bg-gray-800 "
            type="password"
            placeholder="Password"
          />
          <p className="text-red-700">{errorvalid}</p>
          <button
            className="p-2 mt-10 ml-10 text-center w-[300px] rounded-sm bg-red-700 text-white"
            onClick={handleform}
          >
            {signtoggle ? "sign in" : "sign up"}
          </button>

          <div className="flex text-white  mt-4 ">
            <div className="flex w-22 ml-7 ">
              <input type="checkbox" className="w-4 m-2" />
              <p className="mx-2"> Remember me</p>
            </div>
            <div className="ml-[70px] flex justify-end  w-22 ">
              <p>Need help ?</p>
            </div>
          </div>

          <div className=" h-30 mt-[60px] text-white w-[300px]  ml-10">
            <p onClick={handlesignin} className="cursor-pointer">
              {signtoggle ? " New to website ?" : "Already registered ?"}{" "}
              <span className="font-bold">
                {signtoggle ? "Sign up now." : "Sign In now"}
              </span>
            </p>
            <p className="mt-6">
              This page is protected by Google raCAPTCHA to ensure you are no a
              bot . <span className="text-blue-400">Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
