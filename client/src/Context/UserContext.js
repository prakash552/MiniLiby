import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check localStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('minilib-user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('minilib-user', JSON.stringify(userData));
  };

 const logout = () => {
  setUser(null);
  localStorage.removeItem('user');   // ✅
  localStorage.removeItem('token');  // ✅
};


  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
