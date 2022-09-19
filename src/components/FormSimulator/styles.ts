import styled from "styled-components";
import { TextField, FormControl } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    .stack-buttons {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 501px) {
    width: 100%;
    .stack-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Form = styled(FormControl)`
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 501px) {
    flex-direction: row !important;
  }
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 50px;
  color: #000;
  font-size: 16px;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  background-color: var(--primaryColor);
  cursor: pointer;

  @media (min-width: 501px) {
    width: 50%;
  }

  @media (min-width: 600px) {
    width: 200px;
  }
`;

export const CleanButton = styled.button`
  width: 100%;
  height: 50px;
  color: #000;
  font-size: 16px;
  font-weight: bolder;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  @media (min-width: 501px) {
    width: 50%;
  }

  @media (min-width: 600px) {
    width: 200px;
  }
`;
export const SpanError = styled.span`
  font-size: 8px;
  color: red;
`;
