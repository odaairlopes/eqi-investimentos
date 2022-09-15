import styled from "styled-components";
import { TextField, ToggleButton } from "@mui/material";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  width: 50%;
`;
export const Content = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const ButtonGross = styled(ToggleButton)`
  width: 130px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonNet = styled.div`
  width: 130px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--btnColor);
  color: #000;
  font-size: 16px;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
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
