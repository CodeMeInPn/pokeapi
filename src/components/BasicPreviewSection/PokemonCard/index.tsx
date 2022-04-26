import Image from "next/image";
import React from "react";
import pokemonPlaceholder from "assets/Images/placeholderImage.png";
import {
  StyledArticle,
  StyledCardHeader,
  StyledImageWrapper,
  StyledNameWrapper,
  StyledNumber,
  StyledParagraph,
} from "./styles";

const PokemonCard = () => {
  return (
    <StyledArticle>
      <StyledCardHeader>
        <StyledNumber>#001</StyledNumber>
      </StyledCardHeader>
      <StyledImageWrapper>
        <Image src={pokemonPlaceholder} alt="pokemon" />
      </StyledImageWrapper>
      <StyledNameWrapper>
        <StyledParagraph>Placeholder</StyledParagraph>
      </StyledNameWrapper>
    </StyledArticle>
  );
};

export default PokemonCard;
