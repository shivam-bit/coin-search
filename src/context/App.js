import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [appLoading, setAppLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    const fetchCoinsPromise = axios.get(
      'https://supermind-staging.vercel.app/api/test/listing'
    );
    fetchCoinsPromise
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
        throw new Error('Not able to fetch coins');
      })
      .then((data) => {
        const extractedTags = [];
        data.forEach(({ tags }) =>
          tags.forEach((tag) => {
            extractedTags.push(tag);
          })
        );
        setTags([...new Set(extractedTags)]);
        setCoins(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const value = { appLoading, coins, tags };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = ({ children }) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>;
};
