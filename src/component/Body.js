import React from "react";
import Header from "./Header";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
