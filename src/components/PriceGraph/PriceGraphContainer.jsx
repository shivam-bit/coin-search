import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { PriceGraph } from './PriceGraph';
import { formatPriceGraphArray } from 'utils/index';

const PriceGraphContainer = () => {
  const router = useRouter();
  const { coinId } = router.query;
  const [priceData, setPriceData] = useState(null);
  useEffect(() => {
    const fetchCoinPricePromise = axios.get(
      'https://supermind-staging.vercel.app/api/test/graph'
    );
    fetchCoinPricePromise.then((response) => {
      const formattedPrices = formatPriceGraphArray(response.data);

      setPriceData(formattedPrices);
    });
  }, []);
  return <PriceGraph data={priceData} coinId={coinId} />;
};

export { PriceGraphContainer };
