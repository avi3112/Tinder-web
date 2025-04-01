import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Base_URl } from "../utils/constants";
import { Login } from "./Login";
import { UserCard } from "./UserCard";

export const EditProfile = ({ user }) => {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setphotoUrl] = useState(user.photoUrl);
  const [about, setabout] = useState(user.about);
  const [showToast, setshowToast] = useState(false);

  const dispatch = useDispatch();
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        Base_URl + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data));
      setshowToast(true);
      setTimeout(() => {
        setshowToast(false);
      }, 3000);
    } catch (error) {
      console.log("error while saving");
    }
  };
  return (
    <>
      <div className="flex justify-center my=10">
        <div className="flex justify-center mx=10">
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Edit Profile</h2>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First name</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last name</legend>
                  <input
                    type="password"
                    value={lastName}
                    className="input"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Age</legend>
                  <input
                    type="password"
                    value={age}
                    className="input"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gender</legend>
                  <input
                    type="password"
                    value={gender}
                    className="input"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">photoUrl</legend>
                  <input
                    type="password"
                    value={photoUrl}
                    className="input"
                    onChange={(e) => setphotoUrl(e.target.value)}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">About</legend>
                  <input
                    type="password"
                    value={about}
                    className="input"
                    onChange={(e) => setabout(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile save successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};
