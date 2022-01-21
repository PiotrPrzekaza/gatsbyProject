import styled from 'styled-components';

const BlogPostsWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

const BlogPostsTitle = styled.h1`
  font-size: 3rem;
`;

const BlogPostsImg = styled.img`
  width: 400px;
  height: 400px;
`;

export { BlogPostsWrapper, BlogPostsTitle, BlogPostsImg };
