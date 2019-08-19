import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer, { initialState, createFunction } from './authReducer';

export default function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...authState, ...createFunction, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
