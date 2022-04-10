import React from "react";
import PokemonCard from "./PokemonCard";
import { StyledCardsWrapper, StyledSection } from "./styles";

const BasicPreviewSection = () => {
  return (
    <StyledSection>
      <StyledCardsWrapper>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </StyledCardsWrapper>
    </StyledSection>
  );
};

export default BasicPreviewSection;
