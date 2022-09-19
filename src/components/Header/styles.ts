import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  @media (max-width: 375px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
