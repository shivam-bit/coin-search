import axios from 'axios';
import { formatPriceGraphArray } from 'utils';
import { CustomError } from 'utils';
class CoinSDK {
  constructor() {}
  async fetchAllCoins() {
    try {
      const fetchedCoins = await axios.get(
        'https://supermind-staging.vercel.app/api/test/listing'
      );
      if (fetchedCoins.status !== 200) {
        throw new CustomError({
          code: response.status,
          message: 'Not able to fetch coins',
        });
      }
      return fetchedCoins.data;
    } catch (err) {
      console.error(err.message);
    }
  }
  async getCoinPriceStats(coinId) {
    try {
      if (!coinId) {
        throw new CustomError({
          code: 400,
          message: 'Invalid coinId',
        });
      }

      const fetchedCoinPriceStats = await axios.get(
        'https://supermind-staging.vercel.app/api/test/graph'
      );

      if (fetchedCoinPriceStats.status !== 200) {
        throw new CustomError({
          code: response.status,
          message: 'Not able to fetch coin details',
        });
      }
      return formatPriceGraphArray(fetchedCoinPriceStats.data);
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }
  moreNftsAvailable() {
    return Boolean(this.cursor);
  }
  resetCursor() {
    this.cursor = '';
  }
}

export default new CoinSDK();
