import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Base_URl } from "../utils/constants";
import { addUser } from "../utils/userSlice";
export const Login = () => {
  const [emailID, setEmailId] = useState("elon@gmail,com");
  const [password, setPassword] = useState("elon@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        Base_URl + "/login",
        {
          emailID,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email-id</legend>
              <input
                type="text"
                value={emailID}
                className="input"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
