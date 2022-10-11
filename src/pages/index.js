import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { TabsContainer } from 'components/Tabs/TabsContainer';
export default function Home() {
  return (
    <div>
      <TabsContainer />
    </div>
  );
}
