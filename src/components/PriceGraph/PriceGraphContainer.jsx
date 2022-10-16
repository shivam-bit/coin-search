import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CoinSDK from 'services/coin';
import { PriceGraph } from './PriceGraph';

const PriceGraphContainer = () => {
  const router = useRouter();
  const { coinId } = router.query;
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;
    const fetchCoinsInterval = setInterval(() => {
      CoinSDK.getCoinPriceStats(coinId)
        .then((response) => setPriceData(response))
        .catch((err) => console.log(err));
    }, 1000);
    return () => {
      clearInterval(fetchCoinsInterval);
    };
  }, [router.isReady]);

  return <PriceGraph data={priceData} coinId={coinId} />;
};

export { PriceGraphContainer };
