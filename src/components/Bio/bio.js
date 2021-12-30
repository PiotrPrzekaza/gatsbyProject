import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  StyledBioContainer,
  StyledBioTitle,
  StyledBioContent,
  StyledBioParagraph,
} from './bio.styles';

const Bio = () => (
  <StaticQuery
    query={graphql`
      {
        datoCmsBio {
          id
          title
          about
          picture {
            url
            filename
            fluid: fixed(height: 400, width: 400) {
              height
              width
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledBioContainer key={data.datoCmsBio.id}>
        <StyledBioTitle>{data.datoCmsBio.title}</StyledBioTitle>
        <StyledBioContent>
          <StyledBioParagraph>{data.datoCmsBio.about}</StyledBioParagraph>
          <img
            src={data.datoCmsBio.picture.url}
            alt={data.datoCmsBio.picture.filename}
            key={data.datoCmsBio.picture.filename}
            width={data.datoCmsBio.picture.fluid.width}
            height={data.datoCmsBio.picture.fluid.height}
          />
        </StyledBioContent>
      </StyledBioContainer>
    )}
  />
);

export default Bio;
