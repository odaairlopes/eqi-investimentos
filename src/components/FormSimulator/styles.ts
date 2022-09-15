import styled from "styled-components";
import { TextField } from "@mui/material";

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
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
`;
export const SpanError = styled.span`
  font-size: 8px;
  color: red;
`;
