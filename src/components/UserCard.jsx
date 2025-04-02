import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Base_URl } from "../utils/constants";
import { removeUserFeed } from "../utils/feedSlice";

export const UserCard = ({ user = {} }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();
  console.log(user);
  const handleSendRequest = async (status, userId) => {
    try {
      // const res = await axios.post(
      //   Base_URl + "request/send/" + status + "/" + userId,
      //   {},
      //   { withCredentials: true }
      // );
      const res = await axios.post(
        `${Base_URl}/request/send/${status}/${userId}`, // Added `/`
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFeed(userId));
    } catch (error) {}
  };
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{gender}</p>
        <p>{age}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignore", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
