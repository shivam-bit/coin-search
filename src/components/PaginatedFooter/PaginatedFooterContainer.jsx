import React, { useContext } from 'react';
import { PaginatedFooter } from './PaginatedFooter';
import { AppContext } from 'context';
import { ITEMS_PER_PAGE } from 'config/constants';

const PaginatedFooterContainer = () => {
  const { setPageCount, activePageCoins } = useContext(AppContext);

  const updateActivePage = ({ selected }) => {
    setPageCount(selected);
  };
  return (
    <div>
      <PaginatedFooter
        pageClickHandler={updateActivePage}
        pageCount={Math.ceil(activePageCoins.length / ITEMS_PER_PAGE)}
      />
    </div>
  );
};

export { PaginatedFooterContainer };
