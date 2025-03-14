import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        The Crypto Price Tracker is designed to be simple and 
        intuitive, providing real-time cryptocurrency data at a glance.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        The app focuses on delivering essential cryptocurrency information
        without unnecessary complexity or distractions.
      </>
    ),
  },
  {
    title: 'Built with Next.js',
    description: (
      <>
        Leveraging the power of Next.js for optimal performance, SEO,
        and developer experience.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}