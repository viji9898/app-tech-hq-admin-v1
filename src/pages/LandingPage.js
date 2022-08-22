import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <p>tech-hq-admin Console</p>
      <ul>
        <li>
          <Link
            to={{
              pathname: `/admin-dashboard`,
            }}
          >
            {"Super Admin Dashboard"}
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `/editor-dashboard`,
            }}
          >
            {"Editor Dashboard"}
          </Link>
        </li>
      </ul>
    </div>
  );
};
