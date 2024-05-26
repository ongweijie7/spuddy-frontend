import { createContext, useState, useEffect } from 'react';
import { getUser } from './api/UserAPI.js';

export const UserContext = createContext('shit');

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to load user from backend (you will implement this)
  // const loadUser = async (email) => {
  //   const user = getUser(email)
  //   setUser(user)
  //   const userData = await fetchUserDataFromAPI();
  //   setUser(userData);
  // };

  // useEffect(() => {
  //   loadUser(user.email);
  // }, [user]);

  return (
    <UserContext.Provider value={{setUser, user}}>
      {children}
    </UserContext.Provider>
  )
};