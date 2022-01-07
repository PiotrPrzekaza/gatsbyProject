import styled from 'styled-components';

const BlogPostsWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BlogPostsTitle = styled.h1`
  font-size: 3rem;
`;

const BlogPostsImg = styled.img`
  width: 400px;
  height: 400px;
`;

export { BlogPostsWrapper, BlogPostsTitle, BlogPostsImg };
