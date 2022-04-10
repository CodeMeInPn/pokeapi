import Image from "next/image";
import React from "react";
import pokemonPlaceholder from "assets/Images/placeholderImage.png";
import {
  StyledArticle,
  StyledCardHeader,
  StyledImageWrapper,
  StyledParagraph,
} from "./styles";

const PokemonCard = () => {
  return (
    <StyledArticle>
      <StyledCardHeader>
        <StyledParagraph>#001</StyledParagraph>
      </StyledCardHeader>
      <StyledImageWrapper>
        <Image src={pokemonPlaceholder} alt="pokemon" />
      </StyledImageWrapper>
    </StyledArticle>
  );
};

export default PokemonCard;
