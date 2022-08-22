import { Link } from "react-router-dom";

// Auth Control
import netlifyIdentity from "netlify-identity-widget";

export const LandingPage = () => {
  netlifyIdentity.init({});

  return (
    <div style={{ margin: "15px" }}>
      <p>tech-hq-admin Console</p>
      <button
        onClick={() => {
          netlifyIdentity.open();
        }}
      >
        Login
      </button>
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
