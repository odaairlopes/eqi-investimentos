import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 320px) {
    width: 100%;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
