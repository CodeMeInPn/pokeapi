import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 0 16px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form``;

export const StyledInput = styled.input`
  padding: 4px 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;
