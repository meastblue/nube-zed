/**
 * Nube Theme - Main Entry Point
 * Generates all Zed theme files
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { allPalettes, darkPalettes, lightPalettes } from "./palettes";
import { generateTheme } from "./generator";
import type { ZedThemeFile, ZedTheme } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, "..");
const THEMES_DIR = join(ROOT_DIR, "themes");

// =============================================================================
// FILE GENERATION
// =============================================================================

function ensureThemesDir(): void {
  if (!existsSync(THEMES_DIR)) {
    mkdirSync(THEMES_DIR, { recursive: true });
  }
}

function writeThemeFile(filename: string, content: ZedThemeFile): void {
  const filepath = join(THEMES_DIR, filename);
  const json = JSON.stringify(content, null, 2);
  writeFileSync(filepath, json, "utf-8");
  console.log(`  ✓ ${filename}`);
}

function generateThemeFile(
  name: string,
  filename: string,
  themes: ZedTheme[]
): void {
  const themeFile: ZedThemeFile = {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name,
    author: "meastblue",
    themes,
  };

  writeThemeFile(filename, themeFile);
}

// =============================================================================
// MAIN BUILD PROCESS
// =============================================================================

console.log("\n🌍 Nube Theme Generator\n");
console.log("━".repeat(40));

ensureThemesDir();

// All themes in one file
console.log("\n📦 Generating main theme file...\n");

const allThemes = allPalettes.map(generateTheme);
generateThemeFile("Nube", "nube.json", allThemes);

// Separate files by family
console.log("\n📦 Generating family theme files...\n");

// Aurora family
const auroraThemes = allPalettes
  .filter(p => p.identifier.startsWith("aurora"))
  .map(generateTheme);
generateThemeFile("Nube Aurora", "nube-aurora.json", auroraThemes);

// Ember family
const emberThemes = allPalettes
  .filter(p => p.identifier.startsWith("ember"))
  .map(generateTheme);
generateThemeFile("Nube Ember", "nube-ember.json", emberThemes);

// Neon family
const neonThemes = allPalettes
  .filter(p => p.identifier.startsWith("neon"))
  .map(generateTheme);
generateThemeFile("Nube Neon", "nube-neon.json", neonThemes);

// Crystal family (high contrast)
const crystalThemes = allPalettes
  .filter(p => p.identifier.startsWith("crystal"))
  .map(generateTheme);
generateThemeFile("Nube Crystal", "nube-crystal.json", crystalThemes);

// Light themes
const lightThemes = lightPalettes.map(generateTheme);
generateThemeFile("Nube Light", "nube-light.json", lightThemes);

// =============================================================================
// SUMMARY
// =============================================================================

console.log("\n" + "━".repeat(40));
console.log(`\n✨ Generated ${allThemes.length} themes successfully!\n`);

console.log("📊 Theme breakdown:");
console.log(`   • Dark themes:  ${darkPalettes.length}`);
console.log(`   • Light themes: ${lightPalettes.length}`);
console.log(`   • Total:        ${allPalettes.length}`);

console.log("\n📁 Output files:");
console.log("   • nube.json         (all themes)");
console.log("   • nube-aurora.json  (Aurora family)");
console.log("   • nube-ember.json   (Ember family)");
console.log("   • nube-neon.json    (Neon family)");
console.log("   • nube-crystal.json (Crystal - High Contrast)");
console.log("   • nube-light.json   (Light themes)");

console.log("\n🚀 To install in Zed:");
console.log("   1. Copy themes/ to ~/.config/zed/themes/");
console.log("   2. Or install via Zed extensions\n");
