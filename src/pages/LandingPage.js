import { useContext } from "react";

// Auth Control
import { AuthContext } from "../utils/authContext";

export const LandingPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div style={{ margin: "15px", display: "block" }}>
      <p>tech-hq-admin Console</p>
      <p>User:{user ? user.email : "no user"}</p>
      <p>User Role:{user ? user.app_metadata.roles : "no user"}</p>
    </div>
  );
};
