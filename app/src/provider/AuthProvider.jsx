import { createContext, useContext, useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookie, setCookies, removeCookies] = useCookies(["jwt"]);
  const [loading, setLoading] = useState(true);

  const login = (tokenString) => {
    if (tokenString) {
      setToken(tokenString);

      const { exp } = jwtDecode(tokenString);
      if (exp) {
        // Convert JWT exp (in seconds) to maxAge (in seconds)
        const expiresIn = exp - Math.floor(Date.now() / 1000);
        setCookies("jwt", tokenString, {
          path: "/",
          maxAge: expiresIn,
          sameSite: true,
        });
      }

      return;
    }
    logOut();
  };

  const logOut = () => {
    setToken(null);
    setUser(null);
    removeCookies("jwt", { path: "/" });
  };

  useEffect(() => {
    const storedToken = cookie.jwt;
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, [cookie]);

  return (
    <AuthContext.Provider value={{ login, logOut, user, token, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthentication = () => useContext(AuthContext);
