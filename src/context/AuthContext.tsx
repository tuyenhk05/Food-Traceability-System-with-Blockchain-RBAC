import { createContext, useContext, useState } from "react";
import { User } from "../types";

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("foodtrace_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("foodtrace_user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("foodtrace_user");
    // ❗ KHÔNG XÓA user đã đăng ký
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
