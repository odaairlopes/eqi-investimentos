import { Paper } from "@mui/material";
import styled from "styled-components";

export const Content = styled.div`
  padding: 10px 0 10px 30px;
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (min-width: 320px) and (max-width: 600px) {
    padding: 0;
    background-color: blue;
    margin-top: 10px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .stack-cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 601px) and (max-width: 768px) {
    background-color: turquoise;
    width: 100%;
  }

  /* @media (min-width: 769px) {
    .stack-cards {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  } */
`;

export const Cards = styled(Paper)`
  width: 200px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  :nth-last-child(-n + 3) {
    .value {
      color: green;
    }
  }
`;
