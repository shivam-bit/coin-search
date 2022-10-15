import React from 'react';
import styles from 'styles/modules/cards.module.scss';

import { Card } from './Card';

const CardsList = (props) => {
  return (
    <div className={styles['cards-wrapper']}>
      {props.coins.map((coin, index) => {
        return <Card key={index} coin={coin} />;
      })}
    </div>
  );
};

export { CardsList };
