import React from 'react';
import { PriceTag } from './PriceTag';

const PriceTagContainer = ({ price }) => {
  return <PriceTag value={price} currency="USD" />;
};

export { PriceTagContainer };
