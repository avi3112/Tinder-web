import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Base_URl } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";

export const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(Base_URl + "/user/request/received", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addRequests(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return <h1>Loading...</h1>;

  if (requests.length === 0) return <h1>no requests found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              <p>{about}</p>
              <p>{age + " " + gender}</p>
            </div>
            <div>
              <button className="btn  btn-primary mx-2">Accept</button>
              <button className="btn  btn-secondary mx-2">Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
