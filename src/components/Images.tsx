import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type ImageProps = {
  image: string;
};

const Image = ({ image }: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        despedidaBruno: file(
          relativePath: { eq: "2018_03_15_despedida_bruno.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        retroQuintoAndar: file(
          relativePath: { eq: "2018_10_21_retro_quintoandar.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sunsetAptoGirassois: file(
          relativePath: { eq: "2017_12_31_sunset.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        despedidaBigDonkeys: file(
          relativePath: { eq: "2017_12_31_big_donkeys.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1232) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wedding: file(relativePath: { eq: "2016_12_31_wedding.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smile: file(relativePath: { eq: "2016_11_18_smile.png" }) {
          childImageSharp {
            fixed(height: 125, width: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      if (!data.hasOwnProperty(image)) {
        return null;
      } else if (data[image].childImageSharp.hasOwnProperty('fluid')) {
        return <Img fluid={data[image].childImageSharp.fluid} />;
      }

      return <Img fixed={data[image].childImageSharp.fixed} />;
    }}
  />
);

export default Image;
