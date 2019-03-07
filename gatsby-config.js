module.exports = {
  siteMetadata: {
    title: 'cassiocardoso.me',
    description: 'My personal website',
    keywords: [
      'gatsby',
      'typescript',
      'styled-components',
      'react',
      'personal website',
      'developer',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-plugin-twitter',
    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-mdx`,
      options: {
        decks: [],
        defaultLayouts: {
          default: require.resolve('./src/components/postLayout.tsx'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: {
                tsx: 'tsx',
              },
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
        ignore: ['**/.tsx*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cassio Cardoso',
        short_name: 'Cassio Cardoso',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-126089102-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
