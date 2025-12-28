import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* =========================================
   1. DEFINISI IKON (SVG COMPONENTS)
   ========================================= */

const IconAdvocacy = ({className}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const IconLibrary = ({className}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconCommunity = ({className}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* =========================================
   2. DATA FEATURES
   ========================================= */

const FeatureList = [
  {
    title: 'Advokasi Berbasis Data',
    Svg: IconAdvocacy,
    description: (
      <>
        Kami tidak hanya protes, kami mencatat. Mengumpulkan data kondisi trotoar 
        di Denpasar dan Bali untuk mendorong kebijakan publik yang lebih manusiawi.
      </>
    ),
  },
  {
    title: 'Pustaka Urban',
    Svg: IconLibrary,
    description: (
      <>
        Pahami hak Anda sebagai pejalan kaki. Pelajari standar infrastruktur, 
        regulasi, dan studi kasus sukses seperti di Sanur (Bupda Intaran).
      </>
    ),
  },
  {
    title: 'Komunitas Terbuka',
    Svg: IconCommunity,
    description: (
      <>
        Wadah bagi pejalan kaki, pesepeda, dan pengguna transportasi umum 
        untuk berbagi cerita, keluhan, dan solusi. Bergabunglah bersama kami.
      </>
    ),
  },
];

/* =========================================
   3. SUB-KOMPONEN HALAMAN
   ========================================= */

// Komponen Header/Hero
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo_kopeka_bali.png" alt="Logo Kopeka" width="150" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Pelajari Hak Pejalan Kaki 🚶
          </Link>
          <span className="margin-left--md"></span>
          <Link
            className="button button--warning button--lg"
            to="/blog">
            Baca Jurnal Lapangan 📝
          </Link>
        </div>
      </div>
    </header>
  );
}

// Helper untuk render satu item Feature
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Komponen List Features (TIDAK export default di sini)
function HomepageFeatures() {
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

// Komponen GIS Teaser
function GisTeaserSection() {
  return (
    <div className="hero hero--dark">
      <div className="container text--center">
        <h2>🗺️ Project: Peta Masalah (Coming Soon)</h2>
        <p>
          Kami sedang membangun sistem pemetaan partisipatif. 
          Bantu kami memetakan lubang, halangan, dan rute aman di Bali.
        </p>
        <div className="padding-top--md">
            <Link
                className="button button--outline button--primary button--lg"
                to="/peta">
                Lihat Preview
            </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   4. MAIN COMPONENT (EXPORT DEFAULT)
   ========================================= */

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Koalisi Pejalan Kaki Bali - Menapak Bumi, Menjaga Bali">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="">
            <GisTeaserSection />
        </div>
      </main>
    </Layout>
  );
}