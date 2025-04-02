// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Base_URl } from "../utils/constants";
// import { addFeed } from "../utils/feedSlice";
// import { UserCard } from "./UserCard";
// export const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   const dispatch = useDispatch();
//   const getFeed = async () => {
//     // if (feed) return;
//     if (feed && feed.length === 0) return <h1>no more new user found</h1>;
//     try {
//       const res = await axios.get(Base_URl + "/feed", {
//         withCredentials: true,
//       });
//       console.log(res);

//       dispatch(addFeed(res?.data));
//     } catch (error) {}
//   };
//   useEffect(() => {
//     getFeed();
//   }, []);
//   return (
//     // feed && (
//     //   <div className="flex justify-center my-10">
//     //     {/* <UserCard user={feed[0]} /> */}
//     //     {/* <UserCard /> */}
//     //     <UserCard user={user[0]} />
//     //   </div>
//     // )
//     feed && (
//       <div className="flex justify-center my-10">
//         {/* {feed?.length > 0 ? (
//         feed.map((user) => <UserCard key={user._id} user={user} />)
//       ) : (
//         <p>Loading feed...</p>
//       )} */}
//         <UserCard user={feed[0]} />
//       </div>
//     )
//   );
// };
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Base_URl } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { UserCard } from "./UserCard";

export const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(`${Base_URl}/feed`, {
        withCredentials: true,
      });
      console.log("Fetched Feed:", res.data);
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.error("Error fetching feed:", error.response?.data || error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return <h1>Loading...</h1>; // ✅ Handles initial null/undefined state

  if (feed.length === 0) return <h1>No more new users found</h1>; // ✅ Moved condition here

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} /> {/* ✅ Fixed incorrect `user[0]` reference */}
    </div>
  );
};
