import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Api from '../services/api';
export const AuthContext = React.createContext();

const addItem = (key, value = '', isObject = false) => {
  /**
   *  Using the local storage code....
   */
  localStorage.setItem(key, isObject ? JSON.stringify(value) : value );

  /**
   *  Using the Cookies code...
   */
  //if (key) Cookies.set(key, value, { expires: 7 });
};

const clearItem = key => {
  /**
   *  Using the local storage code....
   */
  localStorage.removeItem(key);

  /**
   *  Using the Cookies code...
   */
  //Cookies.remove(key);
};

const isValidToken = () => {
  /**
   *  Using the local storage code....
   */
  const token = localStorage.getItem('token');

  /**
   *  Using the Cookies code...
   */
  //const token = Cookies.get('token');
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const getUser = () => {
  if(isValidToken()){
    return JSON.parse(localStorage.getItem('user'));
  }
  return null;
}


const AuthProvider = props => {
  const [loggedIn, setLoggedIn] = useState(isValidToken());
  // const [loggedOut, setLoggedOut] = useState(true);
  const [user, setUser] = useState(getUser());
  const [token, setToken] = useState(null);

  const signIn = async params => {
    try{
      const response = await Api.post('/api/users/login', params );
      setUser(response.data.user);
      setToken(response.data.token);
      addItem('token', response.data.token);
      addItem('user', response.data.user, true);
      setLoggedIn(true);
    }
    catch(error){
      console.log(error);
    }
  };
  const signUp = async params => {  
    try{
      const response = await Api.post('/api/users/register', params );
      setUser(response.data.user);
      setToken(response.data.token);
      addItem('token', response.data.token);
      addItem('user', response.data.user, true);
      setLoggedIn(true);
    }
    catch(error){
      console.log(error);
    }
  };

  /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */
  const tokenAuth = (token, user = {}) => {
    setUser(user);
    setToken(token);
    addItem('token', token);
    setLoggedIn(true);
  };

  const forgetPass = params => {
    console.log(params, 'forget password form Props');
  };
  const changePass = params => {
    console.log(params, 'change password form Props');
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    clearItem('token');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        forgetPass,
        changePass,
        tokenAuth,
        user,
        token,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
