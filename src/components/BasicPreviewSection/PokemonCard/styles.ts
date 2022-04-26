import styled from "styled-components";

export const StyledArticle = styled.article`
  min-width: 104px;
  min-height: 112px;
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
  height: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const StyledNumber = styled.p`
  padding: 0 8px;
  font-size: 8px;
  color: ${({ theme }) => theme.colors.pokemonTypes.fire};
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledNameWrapper = styled.div`
  padding: 4px 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pokemonTypes.fire};
`;

export const StyledParagraph = styled.p`
  width: 100%;
  font-size: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
