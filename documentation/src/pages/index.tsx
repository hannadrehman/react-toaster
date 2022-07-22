import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import toaster from '../../../dist';
import '../../../dist/index.css';

import styles from './index.module.css';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
 async function showToast(type){
    const res = await toaster[type]('pew pew pew')
    // const { hide } = toaster.success('This is a success message.', {
    //   onClick: () => {
    //     hide();
    //   },
    // });
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
            Docusaurus Tutorial - 5min ⏱️
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
