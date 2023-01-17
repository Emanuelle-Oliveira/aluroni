import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import React from 'react';

// Children é opcional, pois só exite em uma situação especifica
export default function DefaultPage({ children } : { children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet /* Children do react router dom */ />
        {children /* Para possibilitar que não tenha header no notFound */}
      </div>
    </>
  );
}