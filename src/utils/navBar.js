import { NavLink } from "react-router-dom";

// Auth Control
import { useContext } from "react";
import { AuthContext } from "../utils/authContext";

export const NavBar = () => {
  const { user, identity: netlifyIdentity } = useContext(AuthContext);
  return (
    <div>
      <nav style={{ display: "inline-block", padding: "5px" }}>
        <NavLink to="/">{"techHA-Admin "}</NavLink>
        {user && !user.app_metadata.roles.includes("editor") && (
          <NavLink to="/admin-dashboard">{"Admin Dashboard "}</NavLink>
        )}
        {user && !user.app_metadata.roles.includes(["editor", "admin"]) && (
          <NavLink to="/editor-dashboard">{"Editor Dashboard"}</NavLink>
        )}

        {!user ? (
          <button
            onClick={() => {
              netlifyIdentity.open("login");
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              netlifyIdentity.logout();
              netlifyIdentity.off("login");
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};
