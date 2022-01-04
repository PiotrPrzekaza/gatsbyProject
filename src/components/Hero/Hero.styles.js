import styled from 'styled-components';

const HeroWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

const HeroImg = styled.img`
  width: 50%;
  height: 50%;
  overflow: hidden;
  border-radius: 10px;
`;

const HeroImgWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export { HeroWrapper, HeroImg, HeroImgWrapper };
