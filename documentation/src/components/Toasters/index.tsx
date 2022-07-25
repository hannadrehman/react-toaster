import React from 'react';
import clsx from 'clsx';
import toaster from '../../../../dist';
import styles from './styles.module.css';
import '../../../../dist/index.css';
import Link from '@docusaurus/Link';

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

const hideAfters = [1, 2, 3];

export default function Toasters(): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className={styles.toastersContainer}>
          <h1>Type of Toasters</h1>
          <div className={styles.buttonContainer}>
            <button
              className="button button--secondary"
              onClick={() => toaster.success('This is a success message.')}
            >
              <span className="text--success">SUCCESS</span>
            </button>
            <button
              className="button button--secondary"
              onClick={() => toaster.loading('This is a loading message.')}
            >
              <span className="">LOADING</span>
            </button>
            <button
              className="button button--secondary"
              onClick={() => toaster.info('This is a info message.')}
            >
              <span className="text--info">INFO</span>
            </button>
            <button
              className="button button--secondary"
              onClick={() => toaster.warn('This is a warn message.')}
            >
              <span className="text--warning">WARN</span>
            </button>
            <button
              className="button button--secondary"
              onClick={() => toaster.error('This is a error message.')}
            >
              <span className="text--danger">ERROR</span>
            </button>
          </div>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </div>
        <div className={styles.toastersContainer}>
          <h2 className={styles.toasterOptionsTitle}>
            Various Toaster Options
          </h2>
          <h3>Positions</h3>
          <div className={styles.buttonContainer}>
            {positions.map((position) => (
              <button
                className="button button--secondary"
                onClick={() =>
                  toaster.info(
                    `This is a info message at position ${position}`,
                    { position },
                  )
                }
              >
                {position}
              </button>
            ))}
          </div>
          <h3>Hide After</h3>
          <div className={styles.buttonContainer}>
            {hideAfters.map((hideAfter) => (
              <button
                className="button button--secondary"
                onClick={() =>
                  toaster.info(
                    `This is a info message hides after ${hideAfter} secs`,
                    { hideAfter },
                  )
                }
              >
                {hideAfter} secs
              </button>
            ))}
          </div>

          <Link
            className="button button--primary"
            to="/docs/category/toaster---options"
          >
            Check out more in tutorial
          </Link>
        </div>
      </div>
    </section>
  );
}
