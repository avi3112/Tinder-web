import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Base_URl } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Body = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(Base_URl + "/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        Navigate("/login");
      }

      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
