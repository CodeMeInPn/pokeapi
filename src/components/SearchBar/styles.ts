import styled from "styled-components";
import { Field, Form } from "formik";

export const StyledSection = styled.section`
  padding: 0 16px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled(Field)`
  padding: 4px 8px;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 40%;
`;
