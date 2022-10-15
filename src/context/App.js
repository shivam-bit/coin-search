import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ITEMS_PER_PAGE } from 'config/constants';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [appLoading, setAppLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  // Filtered coins based on tags or other future filters
  const [activePageCoins, setActivePageCoins] = useState([]);
  // coins in current active page
  const [currentPageCoins, setCurrentPageCoins] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const startIndex = pageCount * ITEMS_PER_PAGE;
    setCurrentPageCoins(
      activePageCoins.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    );
  }, [pageCount, activePageCoins]);

  // update activePageCoins based on existing tags or filter whenever coins get updated
  useEffect(() => {
    setActivePageCoins([...coins]);
  }, [coins]);

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
        setPageCount(0);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const value = {
    appLoading,
    coins,
    tags,
    activePageCoins,
    currentPageCoins,
    setPageCount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = ({ children }) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>;
};
