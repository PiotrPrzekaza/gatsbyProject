//@ts-check
import { graphql } from 'gatsby'
import React from 'react'

const Products = ({ data }) => {
  const products = data.allDatoCmsProduct.edges
  return (
    <div>
      <h1>Wpisy</h1>
      {
        products.map(({ node }) => {
          return (
            <div key={node.slug}>{node.title}</div>
            
          )
        })
      }
    </div>
  )
}


export const query = graphql`
query{
	allDatoCmsProduct{
		edges{
      node{
        title
        slug
        content
        img {
          size
          width
          height
          path
          format
          isImage
          notes
          author
          copyright
          filename
          basename
          exifInfo
          mimeType
          blurhash
          originalId
          url
          createdAt
          gatsbyImageData
          alt
          title
          customData
        }
      }
    }
  }
}
`

export default Products;