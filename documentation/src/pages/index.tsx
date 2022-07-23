import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import toaster from '../../../dist';
import '../../../dist/index.css';

import styles from './index.module.css';
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const pos = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  async function showToast(type) {
    const ppp = pos[randomIntFromInterval(0, pos.length - 1)];
    const res = await toaster[type]('pew pew pew', {
      position: ppp,
      hideAfter: 100,
    });
  }
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tutorial - 5min ⏱️
          </Link>
        </div>
        <br />
        <div>
          <div>
            <button
              className="button button--secondary button--lg"
              onClick={() => showToast('info')}
            >
              INFO
            </button>
          </div>
          <br />

          <div>
            <button
              className="button button--secondary button--lg"
              onClick={() => showToast('warn')}
            >
              WARN
            </button>
          </div>
          <br />

          <div>
            <button
              className="button button--secondary button--lg"
              onClick={() => showToast('success')}
            >
              SUCCESS
            </button>
          </div>
          <br />

          <div>
            <button
              className="button button--secondary button--lg"
              onClick={() => showToast('error')}
            >
              ERROR
            </button>
          </div>
          <br />

          <div>
            <button
              className="button button--secondary button--lg"
              onClick={() => showToast('loading')}
            >
              LOADING
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
