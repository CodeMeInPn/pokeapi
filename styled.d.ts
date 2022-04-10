import "styled-components";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      pokemonTypes: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      white: string;
      gray_200: string;
      gray_300: string;
      gray_400: string;
      gray_500: string;
      black: string;
    };
    fonts: {
      primaryFontFamily: string;
    };
  }
}
