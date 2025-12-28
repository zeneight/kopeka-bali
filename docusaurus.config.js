// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Koalisi Pejalan Kaki Bali',
  tagline: 'Menapak Bumi, Menjaga Bali',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zeneight', // Usually your GitHub org/user name.
  projectName: 'kopeka-bali', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Kopeka Bali',
        logo: {
          alt: 'Logo Kopeka',
          src: 'img/logo.svg', // Pastikan file ini ada nanti
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Pustaka Kota', // Nama keren untuk "Docs"
          },
          {to: '/blog', label: 'Jurnal Lapangan', position: 'left'}, // Nama keren untuk "Blog"
          {
            to: '/peta', // Halaman teaser GIS (buat file src/pages/peta.js nanti)
            label: 'Peta Masalah (Beta)',
            position: 'left',
            className: 'button button--outline button--primary button--sm margin-left--md', // Styling tombol
          },
          {
            href: 'https://instagram.com/kopekabali', // Link Sosmed
            label: 'Instagram',
            position: 'right',
          },
        ],
      },
      footer: {
      style: 'dark',
        links: [
          {
            title: 'Gerakan',
            items: [
              { label: 'Manifesto', to: '/docs/intro' },
              { label: 'Gabung Komunitas', href: 'https://chat.whatsapp.com/...' },
            ],
          },
          // {
          //   title: 'Edukasi',
          //   items: [
          //     { label: 'Hak Pejalan Kaki', to: '/docs/regulasi/uu-lalu-lintas' },
          //     { label: 'Standar Infrastruktur', to: '/docs/infrastruktur/standar-trotoar' },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Koalisi Pejalan Kaki Bali. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;


