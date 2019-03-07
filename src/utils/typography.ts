import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  googleFonts: [
    {
      name: 'Rock Salt',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles: ['300', '300i', '400', '400i', '800', '800i'],
    },
  ],
  headerFontFamily: ['Open Sans', 'sans-serif'],
  headerWeight: 800,
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  scaleRatio: 2,
});

export default typography;
