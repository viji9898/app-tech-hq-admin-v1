import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    netlifyIdentity.init({});
  });

  netlifyIdentity.on("login", (user) => {
    netlifyIdentity.close();
    setUser(user);
    console.log("login event - user:", user);
  });
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close();
    setUser(null);
    console.log("logout event - user:", user);
  });

  return (
    <AuthContext.Provider value={{ identity: netlifyIdentity, user }}>
      {children}
    </AuthContext.Provider>
  );
};
