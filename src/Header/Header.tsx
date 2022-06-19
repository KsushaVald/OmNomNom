import React from 'react';
import styles from './header.css';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>Ты сегодня покормил кота?</h1>
    </div>
  );
}
