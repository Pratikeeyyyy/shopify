import {createContext,  useEffect,  useState,  ReactNode,  Dispatch,  SetStateAction,
} from "react";

type User = {
  token: string;
  email?: string;
};

type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ token });
    } else {
      setUser(null);
    }
  }, []);

  const isAuthenticated = !!user?.token;

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};