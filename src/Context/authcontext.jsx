import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser(token); 
    } else {
      setUser(null);
    }
  }, []);
// setUser("token") 
//if(setuser===isAuthenticated){
// setUser(user);
// }
// else{
//   setUser("null");
// }
  const isAuthenticated = !!user;

  return (
      <PuvlicRoute>
    <AuthContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}

    </AuthContext.Provider>
      </PuvlicRoute>
  );
};