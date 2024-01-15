import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  identityNumber: string;
  gender: 'male' | 'female';
  birthDate: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (userData: User) => void;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}


const UserContext = createContext<UserContextType | undefined>(undefined);



export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    if (email === 'deneme@gmail.com' && password === '123') {
      setUser({
        email,
        password,
        firstName: 'Demo',
        lastName: 'User',
        identityNumber: '12345678901',
        gender: 'male',
        birthDate: '2000-01-01',
      });
    } else {
      setUser(null);
      throw new Error('Kullanıcı adı veya şifre yanlış ya da bulunamadı.');
    }
  };

  const register = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
