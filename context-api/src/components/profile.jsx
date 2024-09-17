import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);
    console.log("Profile Data: ", user);

    return (
        <span style={{ fontWeight: "bold" }}>
            {user ? user.name : "Login"}
        </span>
    );
};

export default Profile;
