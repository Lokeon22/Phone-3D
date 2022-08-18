import styled from "styled-components";

export const Container = styled.section`
  max-width: 1337px;
  height: 100%;
  padding: 5px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    > header {
      padding: 10px;
    }
  }

  @media screen and (max-width: 550px) {
    > header {
      display: flex;
      flex-direction: column;
      padding: 5px;
    }
  }

  canvas {
    width: 100%;
    height: 650px;
  }
`;

export const Content = styled.section`
  max-width: 650px;
  height: 100%;
  margin: 0 auto;
  padding: 2px;

  @media screen and (max-width: 800px) {
    > h2 {
      font-size: 2.2rem;
    }
  }

  @media screen and (max-width: 550px) {
    > h2 {
      font-size: 1.6rem;
      padding: 5px;
    }
  }
`;
