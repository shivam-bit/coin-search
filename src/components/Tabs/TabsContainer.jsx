import React, { useContext } from 'react';
import { AppContext } from 'context';
import { Tabs } from './Tabs';

const TabsContainer = () => {
  const { tags } = useContext(AppContext);
  return <Tabs tags={tags} />;
};

export { TabsContainer };
