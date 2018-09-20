import palette from './palette';

const theme = {
  title: 'Cassio',
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  googleFonts: [
    {
      name: 'Fira Sans',
      styles: ['400', '700'],
    },
    {
      name: 'Arvo',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Fira Sans', 'sans-serif'],
  bodyFontFamily: ['Arvo', 'sans-serif'],
  headerColor: palette.almostBlack,
  bodyColor: '#777',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: palette.shakespeareBlue,
    },
    'a:hover,a:active': {
      color: palette.saintPatrickBlue,
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
  }),
};

export default theme;
