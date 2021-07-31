import React, { useContext } from "react";
import { UserContext } from "../loginContext";
import { Route, Redirect } from "react-router-dom";

function Profile() {
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  return (
    <Route>{loginStatus ? "This is the Profile" : <Redirect to="/" />}</Route>
  );
}

export default Profile;
