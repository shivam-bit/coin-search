import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = ({ children }) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>;
};
