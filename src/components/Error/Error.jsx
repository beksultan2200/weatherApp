import React from 'react'
import styles from './Error.module.css'

const Error = ({error}) => {
  return (
    <>
      {error && (
        <div className={styles.container}>
          <p className={styles.glitch}>
            <span aria-hidden="true">Error</span>
            Error
            <span aria-hidden="true">Error</span>
          </p>
        </div>
      )}
    </>
  );
}

export default Error