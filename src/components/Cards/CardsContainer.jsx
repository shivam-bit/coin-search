import React, { useContext } from 'react';
import { AppContext } from 'context';
import { CardsList } from './CardsList';
const CardsContainer = () => {
  const { currentPageCoins } = useContext(AppContext);

  return <CardsList coins={currentPageCoins} />;
};

export { CardsContainer };
