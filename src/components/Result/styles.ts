import { Paper } from "@mui/material";
import styled from "styled-components";

export const Content = styled.div`
  padding: 10px 0 10px 30px;
  display: flex;
  flex-direction: column;
  width: 60%;
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
