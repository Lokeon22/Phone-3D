import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    
    background: linear-gradient(45deg, #020202, #232129, #020202, #736401);
  background-size: 250% 400%;
  animation: colors 10s ease infinite;

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Nunito Sans', sans-serif;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

`;
