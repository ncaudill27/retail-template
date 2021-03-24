import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const HeaderBackground = ({children}) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mesh-gradient.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

  return (
    <BgImage image={pluginImage}>
      {children}
    </BgImage>
  );
};

export default HeaderBackground