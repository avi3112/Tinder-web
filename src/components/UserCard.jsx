import React from "react";

export const UserCard = ({ user }) => {
  // const[firstName,lastName,photoUrl,about]=user
  console.log(user);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src="" alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};
