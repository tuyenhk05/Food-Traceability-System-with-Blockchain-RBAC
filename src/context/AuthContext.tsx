import React, { useEffect, useState, createContext, useContext } from 'react';
import { User, UserRole } from '../types';
interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  // Load user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('food_trace_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const login = (role: UserRole) => {
    let name = 'Người dùng Demo';
    switch (role) {
      case 'ADMIN':
        name = 'Quản trị viên Hệ thống';
        break;
      case 'FARMER':
        name = 'Nông trại Xanh Đà Lạt';
        break;
      case 'WHOLESALER':
        name = 'Thu mua Nông sản Việt';
        break;
      case 'PROCESSOR':
        name = 'Chế biến Thực phẩm Sạch';
        break;
      case 'DISTRIBUTOR':
        name = 'Vận tải Logistics Nhanh';
        break;
      case 'RETAILER':
        name = 'Siêu thị Fresh Mart';
        break;
    }
    const mockUser: User = {
      id: '1',
      name: name,
      email: `${role.toLowerCase()}@example.com`,
      role: role,
      avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
    };
    setUser(mockUser);
    localStorage.setItem('food_trace_user', JSON.stringify(mockUser));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('food_trace_user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    logout,
    isAuthenticated: !!user
  }}>
      {children}
    </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}