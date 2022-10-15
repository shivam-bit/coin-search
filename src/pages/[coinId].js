import Head from 'next/head';
import Image from 'next/image';
import { PriceGraphContainer } from 'components/';
import styles from 'styles/modules/app.module.scss';
export default function CoinIdPage() {
  return (
    <div className={styles.app}>
      <PriceGraphContainer />
    </div>
  );
}
