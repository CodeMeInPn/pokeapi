import React from "react";
import { Formik } from "formik";
import SearchIcon from "components/Icons/SearchIcon";
import { StyledForm, StyledInput, StyledLabel, StyledSection } from "./styles";

const SearchBar = () => {
  return (
    <StyledSection>
      <Formik
        initialValues={{
          pokemon: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <StyledForm>
          <StyledLabel htmlFor="pokemon">
            <SearchIcon />
          </StyledLabel>
          <StyledInput id="pokemon" name="pokemon" placeholder={"search"} />
        </StyledForm>
      </Formik>
    </StyledSection>
  );
};

export default SearchBar;
