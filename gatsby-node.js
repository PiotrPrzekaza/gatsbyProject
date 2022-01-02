/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allDatoCmsPost {
        edges {
          node {
            slug
            title
            content
            img {
              url
              alt
              fluid: fixed(height: 400, width: 400) {
                height
                width
              }
            }
          }
        }
      }
    }
  `);
  const post = result.data.allDatoCmsPost.edges;
  const postTemplate = path.resolve('./src/template/blog-post.js');
  post.forEach(({ node }, index) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};
