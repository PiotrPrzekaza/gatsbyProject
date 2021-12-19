import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
      <article key={data.datoCmsBio.id}>
        <h1>{data.datoCmsBio.title}</h1>
        <div>
          {data.datoCmsBio.about}
          <img
            src={data.datoCmsBio.picture.url}
            alt={data.datoCmsBio.picture.filename}
            key={data.datoCmsBio.picture.filename}
            width={data.datoCmsBio.picture.fluid.width}
            height={data.datoCmsBio.picture.fluid.height}
          />
        </div>
      </article>
    )}
  />
);

export default Bio;
