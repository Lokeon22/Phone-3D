import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  > button:nth-child(1) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;
