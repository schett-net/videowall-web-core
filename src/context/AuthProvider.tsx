import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  // Get local user object from localStorage
  const user = localStorage.getItem("u");

  const navigate = useNavigate();

  const [auth, setAuth] = useState(user ? { user: JSON.parse(user) } : {});
  const [isSynced, setIsSynced] = useState<boolean>(false);

  const setAuthAndLS = (newAuth: any) => {
    // Check if user is being given
    if (newAuth.user) {
      // Update local user object with fresh user data
      const userObj = {
        emailAddress: newAuth.user.emailAddress,
        emailVerified: newAuth.user.emailVerified,
        firstName: newAuth.user.firstName,
        lastName: newAuth.user.lastName,
      };

      localStorage.setItem("u", JSON.stringify(userObj));

      setIsSynced(true);
    } else {
      // Remove local user object
      localStorage.removeItem("u");

      // Redirect to login page
      navigate("/");
    }

    setAuth(newAuth);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: setAuthAndLS, isSynced }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
