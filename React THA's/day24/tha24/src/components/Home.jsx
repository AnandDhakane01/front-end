import React, { useContext } from "react";
import { UserContext } from "../loginContext";

function Home() {
  const { loginStatus, setLoginStatus, loading, setLoading } =
    useContext(UserContext);

  const toggleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoginStatus(loginStatus ? false : true);
    }, 3000);
  };

  return (
    <div>
      <p>This is the HomePage</p>
      <br />
      <p>Login to access dashboard and profile</p>
      {!loading ? (
        <button className="login-button" onClick={toggleLogin}>
          {loginStatus ? "logout" : "login"}
        </button>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default Home;
