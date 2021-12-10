import Image from 'next/image';
import React from 'react';
import styleUtils from '../../../public/css/utils.module.css';
import styles from './pagination-button-group.module.css';

interface PaginationProps {
  prev: () => void;
  next: () => void;
}

export default function PaginationButtonGroup({prev, next}: PaginationProps) {
  return (
    <div className={styleUtils.flexEnd}>
      <button onClick={prev} className={`${styles.pagination} ${styles.prevButton}`}>
        <span className={styleUtils.srOnly}>Previous page</span>
      </button>
      <button onClick={next} className={`${styles.pagination}  ${styles.nextButton}`}>
        <span className={styleUtils.srOnly}>Next page</span>
      </button>
    </div>
  );
}
