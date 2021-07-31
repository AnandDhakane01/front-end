import { UserContext } from "../loginContext";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom"

function Dashboard() {
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  return (
      <Route>
      {
        loginStatus ? "This is the dashboard" : <Redirect to="/"/>
      }
      </Route>
  );
}

export default Dashboard;
