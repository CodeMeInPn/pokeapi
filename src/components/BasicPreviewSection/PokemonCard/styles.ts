import styled from "styled-components";

export const StyledArticle = styled.article`
  min-width: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.pokemonTypes.fire};
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledCardHeader = styled.div`
  margin: 4px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledParagraph = styled.p`
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.pokemonTypes.fire};
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
