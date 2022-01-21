import styled from 'styled-components';

const StyledBioParagraph = styled.p`
  display: block;
  line-height: 1.5;
`;

const StyledBioContainer = styled.div`
  width: 70%;
  height: 80%;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7daf2;
  -webkit-box-shadow: 14px 8px 40px 5px rgba(187, 88, 155, 1);
  -moz-box-shadow: 14px 8px 40px 5px rgba(187, 88, 155, 1);
  box-shadow: 14px 8px 40px 5px rgba(187, 88, 155, 1);
`;

const StyledBioTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto';
`;

const StyledBioContent = styled.div`
  font-size: 1.1rem;
  display: flex;
  column-gap: 1rem;
  margin: 3%;
`;

export {
  StyledBioParagraph,
  StyledBioContainer,
  StyledBioContent,
  StyledBioTitle,
};
