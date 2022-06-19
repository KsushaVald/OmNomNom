import React from 'react';
import styles from './cardlist.css';

interface ICardListProps {
  children: React.ReactNode,
}

export function CardList({children}:ICardListProps) {
  return (
    <ul className={styles.cardlist}>
      {children}
    </ul>
  );
}
