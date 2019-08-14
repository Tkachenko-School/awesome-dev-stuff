const siteConfig = {
  title: 'Awesome dev stuff', // Title for your website.
  tagline: 'Awesome-dev-stuff - website with links, related to coding',
  url: 'https://chickenkyiv.github.io', // Your website URL
  baseUrl: '/awesome-dev-stuff/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'awesome-dev-stuff',
  organizationName: 'chickenkyiv',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // { doc: 'summary', label: 'Summary' },
    {doc: 'summary', label: 'Summary'},
    {
      href: 'https://github.com/ChickenKyiv/awesome-dev-stuff',
       label: 'GitHub repository'
     },
    // {page: 'help', label: 'Help'},
  ],



  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}
  ChickenKyiv company`,


  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,


  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/ChickenKyiv/awesome-dev-stuff',
};
