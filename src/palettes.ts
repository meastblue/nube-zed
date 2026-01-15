/**
 * Poro Theme - Color Palettes
 * A cozy and vibrant color system for developers
 */

import { colord as c } from "colord";
import type { PoroPalette, SyntaxColors, SemanticLevels, SurfaceColors, TextColors } from "./types";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function generateSurfacesDark(base: string): SurfaceColors {
  return {
    crust: c(base).darken(0.04).toHex(),
    mantle: c(base).darken(0.02).toHex(),
    base: base,
    surface0: c(base).lighten(0.05).toHex(),
    surface1: c(base).lighten(0.10).toHex(),
    surface2: c(base).lighten(0.15).toHex(),
  };
}

function generateSurfacesLight(base: string): SurfaceColors {
  return {
    crust: c(base).darken(0.08).toHex(),
    mantle: c(base).darken(0.04).toHex(),
    base: base,
    surface0: c(base).darken(0.10).toHex(),
    surface1: c(base).darken(0.15).toHex(),
    surface2: c(base).darken(0.20).toHex(),
  };
}

function generateTextsDark(base: string, _primary: string): TextColors {
  return {
    overlay0: c(base).lighten(0.25).toHex(),
    overlay1: c(base).lighten(0.35).toHex(),
    overlay2: c(base).lighten(0.45).toHex(),
    subtext0: c(base).lighten(0.55).toHex(),
    subtext1: c(base).lighten(0.60).toHex(),
    text: c(base).lighten(0.70).desaturate(0.01).toHex(),
  };
}

function generateTextsLight(base: string, primary: string): TextColors {
  return {
    overlay0: c(base).darken(0.25).toHex(),
    overlay1: c(base).darken(0.35).toHex(),
    overlay2: c(base).darken(0.45).toHex(),
    subtext0: c(base).darken(0.50).toHex(),
    subtext1: c(base).darken(0.55).toHex(),
    text: c(primary).darken(0.40).desaturate(0.3).toHex(),
  };
}

// =============================================================================
// AURORA - Cool blue-gray northern lights
// =============================================================================

const auroraColors: SyntaxColors = {
  blue: "#69C3FF",
  green: "#3CEC85",
  greenAlt: "#A4EF58",
  orange: "#FF955C",
  pink: "#F38CEC",
  purple: "#B78AFF",
  red: "#E35535",
  salmon: "#FF738A",
  turquoise: "#22ECDB",
  yellow: "#EACD61",
};

const auroraLevels: SemanticLevels = {
  danger: auroraColors.red,
  info: auroraColors.blue,
  success: auroraColors.green,
  warning: auroraColors.orange,
};

export const auroraFrost: PoroPalette = {
  name: "Aurora Frost",
  identifier: "aurora-frost",
  dark: true,
  colors: auroraColors,
  levels: auroraLevels,
  surfaces: generateSurfacesDark("#1c2433"),
  texts: generateTextsDark("#1c2433", "#8196b5"),
  accent: "#8196b5",
};

export const auroraStorm: PoroPalette = {
  name: "Aurora Storm",
  identifier: "aurora-storm",
  dark: true,
  colors: auroraColors,
  levels: auroraLevels,
  surfaces: generateSurfacesDark("#222A38"),
  texts: generateTextsDark("#222A38", "#9DACC3"),
  accent: "#9DACC3",
};

export const auroraBerry: PoroPalette = {
  name: "Aurora Berry",
  identifier: "aurora-berry",
  dark: true,
  colors: auroraColors,
  levels: auroraLevels,
  surfaces: generateSurfacesDark("#111422"),
  texts: generateTextsDark("#111422", "#8eb0e6"),
  accent: "#8eb0e6",
};

// =============================================================================
// EMBER - Warm glowing embers
// =============================================================================

const emberColors: SyntaxColors = {
  blue: "#78dce8",
  green: "#a9dc76",
  greenAlt: "#b7d175",
  orange: "#fc9867",
  pink: "#e991e3",
  purple: "#ab9df2",
  red: "#fc6a67",
  salmon: "#ff6188",
  turquoise: "#78e8c6",
  yellow: "#ffd866",
};

const emberLevels: SemanticLevels = {
  danger: emberColors.red,
  info: emberColors.blue,
  success: emberColors.green,
  warning: emberColors.yellow,
};

export const emberTerra: PoroPalette = {
  name: "Ember Terra",
  identifier: "ember-terra",
  dark: true,
  colors: emberColors,
  levels: emberLevels,
  surfaces: generateSurfacesDark("#262329"),
  texts: generateTextsDark("#262329", "#b0a2a6"),
  accent: "#b0a2a6",
};

export const emberSteel: PoroPalette = {
  name: "Ember Steel",
  identifier: "ember-steel",
  dark: true,
  colors: emberColors,
  levels: emberLevels,
  surfaces: generateSurfacesDark("#1e212b"),
  texts: generateTextsDark("#1e212b", "#98a2b5"),
  accent: "#98a2b5",
};

export const emberStone: PoroPalette = {
  name: "Ember Stone",
  identifier: "ember-stone",
  dark: true,
  colors: emberColors,
  levels: emberLevels,
  surfaces: generateSurfacesDark("#2A2D33"),
  texts: generateTextsDark("#2A2D33", "#9AA2A6"),
  accent: "#9AA2A6",
};

// =============================================================================
// NEON - Electric and vibrant
// =============================================================================

const neonColors: SyntaxColors = {
  blue: "#28A9FF",
  green: "#42DD76",
  greenAlt: "#b7d175",
  orange: "#FF7135",
  pink: "#E66DFF",
  purple: "#A95EFF",
  red: "#D62C2C",
  salmon: "#FF478D",
  turquoise: "#14E5D4",
  yellow: "#FFB638",
};

const neonLevels: SemanticLevels = {
  danger: neonColors.red,
  info: neonColors.blue,
  success: neonColors.green,
  warning: neonColors.yellow,
};

export const neonGrape: PoroPalette = {
  name: "Neon Grape",
  identifier: "neon-grape",
  dark: true,
  colors: neonColors,
  levels: neonLevels,
  surfaces: generateSurfacesDark("#171131"),
  texts: generateTextsDark("#171131", "#A680FF"),
  accent: "#A680FF",
};

export const neonVoid: PoroPalette = {
  name: "Neon Void",
  identifier: "neon-void",
  dark: true,
  colors: neonColors,
  levels: neonLevels,
  surfaces: generateSurfacesDark("#141417"),
  texts: generateTextsDark("#141417", "#AAAAAA"),
  accent: "#AAAAAA",
};

// =============================================================================
// ECLIPSE - Warm teal sunset
// =============================================================================

const eclipseColors: SyntaxColors = {
  blue: "#4db0f7",
  green: "#a5b82e",
  greenAlt: "#97e24c",
  orange: "#e8913b",
  pink: "#df96d9",
  purple: "#858bf7",
  red: "#f45645",
  salmon: "#f154a0",
  turquoise: "#26bbae",
  yellow: "#e2ae10",
};

const eclipseLevels: SemanticLevels = {
  danger: eclipseColors.red,
  info: eclipseColors.blue,
  success: eclipseColors.green,
  warning: eclipseColors.yellow,
};

export const eclipse: PoroPalette = {
  name: "Eclipse",
  identifier: "eclipse",
  dark: true,
  colors: eclipseColors,
  levels: eclipseLevels,
  surfaces: generateSurfacesDark("#132c34"),
  texts: generateTextsDark("#132c34", "#47cfc4"),
  accent: "#47cfc4",
};

// =============================================================================
// DEPTHS - Deep ocean vibes
// =============================================================================

const depthsColors: SyntaxColors = {
  blue: "#5fb2df",
  green: "#97c892",
  greenAlt: "#A4EF58",
  orange: "#DC8255",
  pink: "#d194cd",
  purple: "#978dd6",
  red: "#B4552D",
  salmon: "#ee5d75",
  turquoise: "#59c6c8",
  yellow: "#f6cc73",
};

const depthsLevels: SemanticLevels = {
  danger: depthsColors.salmon,
  info: depthsColors.blue,
  success: depthsColors.green,
  warning: depthsColors.orange,
};

export const depths: PoroPalette = {
  name: "Depths",
  identifier: "depths",
  dark: true,
  colors: depthsColors,
  levels: depthsLevels,
  surfaces: generateSurfacesDark("#1a2b34"),
  texts: generateTextsDark("#1a2b34", "#97c892"),
  accent: "#97c892",
};

// =============================================================================
// ESPRESSO - Warm coffee tones
// =============================================================================

const espressoColors: SyntaxColors = {
  blue: "#6EDDD6",
  green: "#9DCC57",
  greenAlt: "#7E9E2D",
  orange: "#ffa777",
  pink: "#E480AD",
  purple: "#9991F1",
  red: "#f24343",
  salmon: "#f77a6a",
  turquoise: "#3ceaa8",
  yellow: "#f7d979",
};

const espressoLevels: SemanticLevels = {
  danger: espressoColors.red,
  info: espressoColors.blue,
  success: espressoColors.green,
  warning: espressoColors.orange,
};

export const espresso: PoroPalette = {
  name: "Espresso",
  identifier: "espresso",
  dark: true,
  colors: espressoColors,
  levels: espressoLevels,
  surfaces: generateSurfacesDark("#292423"),
  texts: generateTextsDark("#292423", "#F09177"),
  accent: "#F09177",
};

// =============================================================================
// CRYSTAL - High contrast clarity
// =============================================================================

const crystalColors: SyntaxColors = {
  blue: "#7fd7f5",
  green: "#AFEA7B",
  greenAlt: "#A4EF58",
  orange: "#ffaa7d",
  pink: "#e4a3df",
  purple: "#bc98ff",
  red: "#fd604f",
  salmon: "#EC7886",
  turquoise: "#22D3B1",
  yellow: "#F5DF76",
};

const crystalLevels: SemanticLevels = {
  danger: crystalColors.red,
  info: crystalColors.blue,
  success: crystalColors.green,
  warning: crystalColors.orange,
};

export const crystalOnyx: PoroPalette = {
  name: "Crystal Onyx",
  identifier: "crystal-onyx",
  dark: true,
  colors: crystalColors,
  levels: crystalLevels,
  surfaces: generateSurfacesDark("#181820"),
  texts: generateTextsDark("#181820", "#dbdeea"),
  accent: "#dbdeea",
};

export const crystalCosmos: PoroPalette = {
  name: "Crystal Cosmos",
  identifier: "crystal-cosmos",
  dark: true,
  colors: crystalColors,
  levels: crystalLevels,
  surfaces: generateSurfacesDark("#151f27"),
  texts: generateTextsDark("#151f27", "#dbefff"),
  accent: "#dbefff",
};

// =============================================================================
// DAYLIGHT - Clean and bright
// =============================================================================

const daylightColors: SyntaxColors = {
  blue: "#0073d1",
  green: "#189433",
  greenAlt: "#5e8516",
  orange: "#d06200",
  pink: "#e022b4",
  purple: "#8737e6",
  red: "#d03333",
  salmon: "#e8386a",
  turquoise: "#009999",
  yellow: "#bb9600",
};

const daylightLevels: SemanticLevels = {
  danger: "#ac2121",
  info: "#0468bf",
  success: "#14852a",
  warning: "#bc7400",
};

export const daylight: PoroPalette = {
  name: "Daylight",
  identifier: "daylight",
  dark: false,
  colors: daylightColors,
  levels: daylightLevels,
  surfaces: generateSurfacesLight("#f3f4f5"),
  texts: generateTextsLight("#f3f4f5", "#22a5c9"),
  accent: "#22a5c9",
};

// =============================================================================
// SORBET - Soft and sweet light themes
// =============================================================================

const sorbetColors: SyntaxColors = {
  blue: "#0076c5",
  green: "#008b17",
  greenAlt: "#668b07",
  orange: "#b96000",
  pink: "#c121a4",
  purple: "#7522d3",
  red: "#d12525",
  salmon: "#da2a5f",
  turquoise: "#008f8f",
  yellow: "#c08403",
};

const sorbetLevels: SemanticLevels = {
  danger: sorbetColors.red,
  info: sorbetColors.blue,
  success: sorbetColors.green,
  warning: sorbetColors.yellow,
};

export const sorbetCherry: PoroPalette = {
  name: "Sorbet Cherry",
  identifier: "sorbet-cherry",
  dark: false,
  colors: sorbetColors,
  levels: sorbetLevels,
  surfaces: generateSurfacesLight("#f1e8eb"),
  texts: generateTextsLight("#f1e8eb", "#d1174f"),
  accent: "#d1174f",
};

export const sorbetMint: PoroPalette = {
  name: "Sorbet Mint",
  identifier: "sorbet-mint",
  dark: false,
  colors: sorbetColors,
  levels: sorbetLevels,
  surfaces: generateSurfacesLight("#edf3ee"),
  texts: generateTextsLight("#edf3ee", "#2a9b7d"),
  accent: "#2a9b7d",
};

export const sorbetGrape: PoroPalette = {
  name: "Sorbet Grape",
  identifier: "sorbet-grape",
  dark: false,
  colors: sorbetColors,
  levels: sorbetLevels,
  surfaces: generateSurfacesLight("#dad9eb"),
  texts: generateTextsLight("#dad9eb", "#422eb0"),
  accent: "#422eb0",
};

// =============================================================================
// NEBULA - Deep black with vibrant gem-like accents
// =============================================================================

const nebulaColors: SyntaxColors = {
  blue: "#11B7D4",      // Functions
  green: "#00a884",     // Strings
  greenAlt: "#3585bb",  // Classes
  orange: "#d4770c",    // Accessors
  pink: "#d46ec0",      // Arguments/Decorators
  purple: "#a85ff1",    // Types
  red: "#E35535",       // Constants
  salmon: "#c62f52",    // Variables
  turquoise: "#38c7bd", // Function storage
  yellow: "#c7910c",    // Keywords
};

const nebulaLevels: SemanticLevels = {
  danger: nebulaColors.red,
  info: nebulaColors.blue,
  success: nebulaColors.green,
  warning: nebulaColors.orange,
};

export const nebulaSapphire: PoroPalette = {
  name: "Nebula Sapphire",
  identifier: "nebula-sapphire",
  dark: true,
  colors: nebulaColors,
  levels: nebulaLevels,
  surfaces: generateSurfacesDark("#111418"),
  texts: generateTextsDark("#111418", "#11B7D4"),
  accent: "#11B7D4",
};

export const nebulaAmber: PoroPalette = {
  name: "Nebula Amber",
  identifier: "nebula-amber",
  dark: true,
  colors: nebulaColors,
  levels: nebulaLevels,
  surfaces: generateSurfacesDark("#111418"),
  texts: generateTextsDark("#111418", "#c7910c"),
  accent: "#c7910c",
};

export const nebulaCrimson: PoroPalette = {
  name: "Nebula Crimson",
  identifier: "nebula-crimson",
  dark: true,
  colors: nebulaColors,
  levels: nebulaLevels,
  surfaces: generateSurfacesDark("#111418"),
  texts: generateTextsDark("#111418", "#c62f52"),
  accent: "#c62f52",
};

export const nebulaJade: PoroPalette = {
  name: "Nebula Jade",
  identifier: "nebula-jade",
  dark: true,
  colors: nebulaColors,
  levels: nebulaLevels,
  surfaces: generateSurfacesDark("#111418"),
  texts: generateTextsDark("#111418", "#38c7bd"),
  accent: "#38c7bd",
};

export const nebulaViolet: PoroPalette = {
  name: "Nebula Violet",
  identifier: "nebula-violet",
  dark: true,
  colors: nebulaColors,
  levels: nebulaLevels,
  surfaces: generateSurfacesDark("#111418"),
  texts: generateTextsDark("#111418", "#a85ff1"),
  accent: "#a85ff1",
};

// =============================================================================
// EXPORT ALL PALETTES
// =============================================================================

export const allPalettes: PoroPalette[] = [
  // Aurora family
  auroraFrost,
  auroraStorm,
  auroraBerry,
  // Ember family
  emberTerra,
  emberSteel,
  emberStone,
  // Neon family
  neonGrape,
  neonVoid,
  // Eclipse
  eclipse,
  // Depths
  depths,
  // Espresso
  espresso,
  // Crystal family
  crystalOnyx,
  crystalCosmos,
  // Nebula family
  nebulaSapphire,
  nebulaAmber,
  nebulaCrimson,
  nebulaJade,
  nebulaViolet,
  // Light themes
  daylight,
  sorbetCherry,
  sorbetMint,
  sorbetGrape,
];

export const darkPalettes = allPalettes.filter(p => p.dark);
export const lightPalettes = allPalettes.filter(p => !p.dark);
