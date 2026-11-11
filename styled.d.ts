import "styled-components";
import type {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  spacing,
  animations,
  borderRadius,
  shadows,
  africanMotifs,
  layout,
  breakpoints,
  zIndex,
  particles,
} from "@/assets/design-tokens";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    spacing: typeof spacing;
    animations: typeof animations;
    borderRadius: typeof borderRadius;
    shadows: typeof shadows;
    africanMotifs: typeof africanMotifs;
    layout: typeof layout;
    breakpoints: typeof breakpoints;
    zIndex: typeof zIndex;
    particles: typeof particles;
    sectionPadding: string;
  }
}