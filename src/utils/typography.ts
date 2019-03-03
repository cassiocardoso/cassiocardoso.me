import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['600'],
    },
    {
      name: 'Rock Salt',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles: ['300', '300i', '600', '600i'],
    },
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  scaleRatio: 2,
});

export default typography;
