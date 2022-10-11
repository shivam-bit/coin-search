import React from 'react';
import styles from 'styles/modules/tabs.module.scss';

const Tabs = (props) => {
  return (
    <div className={styles['tabs-wrapper']}>
      {props.tags.map((tag, index) => {
        return (
          <div key={index} className={styles['tabs-wrapper__item']}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export { Tabs };
