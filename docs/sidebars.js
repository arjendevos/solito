/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  mySidebar: [
    // 'welcome',
    'welcome',
    'starter',
    'install',
    // {
    //   type: 'ref',
    //   label: 'Welcome',
    //   id: 'welcome',
    // },
    // {
    //   type: 'ref',
    //   id: 'install',
    //   label: 'Installation',
    // },
    {
      type: 'category',
      items: [
        'usage/link',
        'usage/text-link',
        'usage/moti-link',
        'usage/use-router',
        'usage/params',
        'usage/use-link',
      ],
      label: 'API',
      collapsed: false,
    },
    {
      type: 'category',
      items: ['guides/new-route', 'guides/dynamic-route'],
      label: 'Guides',
      collapsed: false,
    },
    {
      type: 'category',
      items: [
        'recipes/redirects',
        'recipes/tree-shaking',
        'recipes/use-is-focused',
        'recipes/scroll-view',
        'recipes/deep-linking',
        'recipes/modals',
      ],
      label: 'Recipes',
      collapsed: false,
    },
    // {
    //   type: 'category',
    //   items: [
    //     // 'typescript/navigation-options',
    //     'typescript/next-replacements',
    //   ],
    //   label: 'TypeScript',
    // },
    'gradual-adoption',
    'methodology',
    'resources',
    // 'community',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}

module.exports = sidebars
