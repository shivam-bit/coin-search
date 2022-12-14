import React from 'react';
import Link from 'next/link';
import styles from 'styles/modules/cards.module.scss';
import { Copy, FileSuccess } from '@icon-park/react';
import { useCopyToClipboard } from 'hooks';
const Card = (props) => {
  const [isCopied, handleCopy] = useCopyToClipboard(4000);
  const constructCopyObject = (e) => {
    e.stopPropagation();
    const coinObject = props.coin;
    const data = `
    ------ COIN INFO --------
    Name - ${coinObject.name}
    Fullname - ${coinObject.fullName}
    Symbol - ${coinObject.symbol}
    Price - $${coinObject.price.toFixed(6)} 
    `;
    handleCopy(data);
  };
  return (
    <Link href={`/${props.coin.id}`}>
      <div className={styles['card']}>
        <div className={styles['card--tile-bar']}>
          <span>{props.coin.name}</span>
          {isCopied ? (
            <FileSuccess theme="outline" size="24" fill="#20ca48" />
          ) : (
            <span onClick={constructCopyObject}>
              <Copy theme="outline" size="24" fill="#fff" />
            </span>
          )}
        </div>
        <div className={styles['card--body']}>
          <span>{props.coin.fullName}</span>
          <span className={styles['card--body__price']}>
            $ {props.coin.price ? props.coin.price.toFixed(6) : 'Unavailable'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export { Card };
