import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Crypto Price Tracker</h1>
        <p className="hero__subtitle">Track cryptocurrency prices in real-time</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Docs - Crypto Price Tracker"
      description="Documentation for the Crypto Price Tracker application built with Next.js">
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="text--center margin-bottom--lg">
                <h2>Welcome to the Crypto Price Tracker Documentation</h2>
                <p>
                  This documentation provides detailed information about the Crypto Price Tracker application,
                  including setup instructions, architecture overview, API integration details, and more.
                </p>
              </div>
              
              <div className="card-demo margin-top--lg">
                <div className="card">
                  <div className="card__header">
                    <h3>Project Overview</h3>
                  </div>
                  <div className="card__body">
                    <p>
                      The Crypto Price Tracker is a web dashboard built with Next.js that displays live cryptocurrency prices 
                      using public cryptocurrency APIs. It features a clean interface with search functionality, real-time 
                      data updates, and responsive design.
                    </p>
                  </div>
                  <div className="card__footer">
                    <Link
                      className="button button--primary button--block"
                      to="/docs/intro">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="row margin-top--lg">
                <div className="col col--6">
                  <div className="card">
                    <div className="card__header">
                      <h3>Features</h3>
                    </div>
                    <div className="card__body">
                      <ul>
                        <li>Live cryptocurrency price tracking</li>
                        <li>Search functionality</li>
                        <li>Manual refresh option</li>
                        <li>Responsive design</li>
                        <li>Clean and intuitive UI</li>
                      </ul>
                    </div>
                    <div className="card__footer">
                      <Link to="/docs/components" className="button button--secondary button--block">
                        View Components
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="card">
                    <div className="card__header">
                      <h3>Technical Stack</h3>
                    </div>
                    <div className="card__body">
                      <ul>
                        <li>Next.js framework</li>
                        <li>React Context API for state management</li>
                        <li>Public cryptocurrency APIs</li>
                        <li>Custom React hooks</li>
                        <li>Responsive design with CSS</li>
                      </ul>
                    </div>
                    <div className="card__footer">
                      <Link to="/docs/architecture" className="button button--secondary button--block">
                        View Architecture
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}