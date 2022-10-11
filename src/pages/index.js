import Head from 'next/head';
import Image from 'next/image';
import {
  TabsContainer,
  PaginatedFooterContainer,
  CardsContainer,
} from 'components/';
import styles from 'styles/modules/app.module.scss';
export default function Home() {
  return (
    <div className={styles.app}>
      <TabsContainer />
      <CardsContainer />
      <PaginatedFooterContainer />
    </div>
  );
}
