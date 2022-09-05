import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { db } from "../../utils/firebase";
import DevProfile from "./DevProfile";

const FetchDevProfile = () => {
  const [devProfile, setDevProfile] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("profile")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setDevProfile(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  return (
    <div>
      {/* {!devProfile || devProfile.length === 0 ? (
        <div>
          <h3 className="text-gray-500 mt-5 font-semibold">
            No Developer Found.
          </h3>
        </div>
      ) : ( */}
      {
        devProfile?.map((dev) => (
          <DevProfile
            key={dev.id}
            name={dev.data.name}
            timestamp={dev.data.timestamp}
            displayName={dev.data.displayName}
            phone={dev.data.phone}
            email={dev.data.email}
            website={dev.data.website}
            country={dev.data.country}
            city={dev.data.city}
            bio={dev.data.bio}
            uid={dev.data.uid}
          />
        ))
        // )
      }
    </div>
  );
};

export default FetchDevProfile;
