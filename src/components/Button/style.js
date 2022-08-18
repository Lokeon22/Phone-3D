import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 40px;
  padding: 18px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  background: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;
`;
