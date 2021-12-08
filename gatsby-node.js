const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    query {
        allDatoCmsProduct {
        edges {
          node {
            slug
            title
            content
          }
        }
      }
    }
  `)
    const product = result.data.allDatoCmsProduct.edges;
    const productTemplate = require.resolve('./src/template/product-details.js');
    product.forEach(({ node }, index) => {
        const { slug } = node;

        createPage({
            path: slug,
            component: productTemplate,
            context: {
                slug
            }
        })
    })
}