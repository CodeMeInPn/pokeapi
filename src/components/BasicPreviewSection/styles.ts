import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 0 16px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCardsWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 104px);
  grid-template-rows: auto;
  grid-gap: 8px;
`;
