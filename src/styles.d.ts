import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      types: {
        bug: string;
        dark: string;
        dragon: string;
        eletric: string;
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
      background: string;
      light: {
        pure: string;
        1: string;
        2: string;
        3: string;
      };
      dark: {
        pure: string;
        1: string;
        2: string;
        3: string;
      };
      neutral: {
        pure: string;
        1: string;
        2: string;
        3: string;
      };
      primary: string;
      secondary: string;
      feedback: {
        warning: string;
        error: string;
        success: string;
        info: string;
      };
    };
    font: {
      colors: {
        white: string;
        dark: string;
        contrast: string;
        inverse: string;
        pure: string;
        1: string;
        2: string;
        3: string;
      };
    };
    breakpoints: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      time: string;
      type: string;
    };
    spacing: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
