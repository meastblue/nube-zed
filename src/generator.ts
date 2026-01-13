/**
 * Nube Theme - Theme Generator
 * Generates Zed theme JSON from Nube palettes
 */

import { colord as c, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { PoroPalette, ZedTheme, ZedThemeStyle, SyntaxStyle, PlayerStyle } from "./types";

extend([mixPlugin]);

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Add alpha channel to a hex color
 */
function withAlpha(hex: string, alpha: number): string {
  const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, "0");
  return `${hex}${alphaHex}`;
}

/**
 * Lighten a color
 */
function lighten(hex: string, amount: number): string {
  return c(hex).lighten(amount).toHex();
}

/**
 * Darken a color
 */
function darken(hex: string, amount: number): string {
  return c(hex).darken(amount).toHex();
}

/**
 * Mix two colors
 */
function mix(color1: string, color2: string, amount: number): string {
  return c(color1).mix(color2, amount).toHex();
}

/**
 * Create a syntax style object
 */
function syntax(
  color: string,
  fontStyle: "italic" | "normal" | null = null,
  fontWeight: number | null = null
): SyntaxStyle {
  return { color, font_style: fontStyle, font_weight: fontWeight };
}

// =============================================================================
// THEME GENERATOR
// =============================================================================

/**
 * Generate rainbow colors for accents (indent coloring)
 */
function generateRainbow(palette: PoroPalette): string[] {
  const colors = palette.colors;
  const text = palette.texts.text;

  return [
    withAlpha(mix(colors.red, text, 0.8), 0.4),
    withAlpha(mix(colors.orange, text, 0.8), 0.4),
    withAlpha(mix(colors.yellow, text, 0.8), 0.4),
    withAlpha(mix(colors.green, text, 0.8), 0.4),
    withAlpha(mix(colors.blue, text, 0.8), 0.4),
    withAlpha(mix(colors.purple, text, 0.8), 0.4),
    withAlpha(mix(colors.pink, text, 0.8), 0.4),
  ].reverse();
}

/**
 * Generate player colors for multi-cursor collaboration
 */
function generatePlayers(palette: PoroPalette): PlayerStyle[] {
  const colors = palette.colors;
  const text = palette.texts.text;
  const selectionAlpha = palette.dark ? 0.25 : 0.3;

  const rainbow = [
    mix(colors.red, text, 0.8),
    mix(colors.orange, text, 0.8),
    mix(colors.yellow, text, 0.8),
    mix(colors.green, text, 0.8),
    mix(colors.blue, text, 0.8),
    mix(colors.purple, text, 0.8),
    mix(colors.pink, text, 0.8),
  ].reverse();

  // First player uses accent
  const players: PlayerStyle[] = [
    {
      cursor: palette.accent,
      selection: withAlpha(palette.texts.overlay2, selectionAlpha),
      background: palette.accent,
    },
  ];

  // Additional players use rainbow colors
  for (const color of rainbow) {
    players.push({
      cursor: color,
      selection: withAlpha(color, selectionAlpha),
      background: color,
    });
  }

  return players;
}

/**
 * Generate syntax highlighting rules
 */
function generateSyntax(palette: PoroPalette): Record<string, SyntaxStyle> {
  const c = palette.colors;
  const t = palette.texts;

  return {
    // Identifiers
    "variable": syntax(t.text),
    "variable.builtin": syntax(c.red),
    "variable.parameter": syntax(c.pink),
    "variable.member": syntax(c.orange),
    "variable.special": syntax(c.red, "italic"),

    // Constants
    "constant": syntax(c.red),
    "constant.builtin": syntax(c.red),
    "constant.macro": syntax(c.purple),

    // Modules & Labels
    "module": syntax(c.yellow, "italic"),
    "label": syntax(c.turquoise),

    // Strings
    "string": syntax(c.green),
    "string.documentation": syntax(c.turquoise),
    "string.regexp": syntax(c.orange),
    "string.escape": syntax(c.pink),
    "string.special": syntax(c.pink),
    "string.special.path": syntax(c.pink),
    "string.special.symbol": syntax(c.salmon),
    "string.special.url": syntax(c.blue, "italic"),
    "string.doc": syntax(c.turquoise, "italic"),
    "string.regex": syntax(c.orange),

    // Characters
    "character": syntax(c.turquoise),
    "character.special": syntax(c.pink),

    // Numbers
    "boolean": syntax(c.red),
    "number": syntax(c.red),
    "number.float": syntax(c.red),
    "float": syntax(c.red),

    // Types
    "type": syntax(c.purple),
    "type.builtin": syntax(c.purple, "italic"),
    "type.definition": syntax(c.purple),
    "type.interface": syntax(c.purple, "italic"),
    "type.super": syntax(c.purple, "italic"),
    "type.class.definition": syntax(c.greenAlt, null, 700),

    // Attributes & Properties
    "attribute": syntax(c.yellow),
    "property": syntax(c.orange),

    // Functions
    "function": syntax(c.blue),
    "function.builtin": syntax(c.turquoise),
    "function.call": syntax(c.blue),
    "function.macro": syntax(c.turquoise),
    "function.method": syntax(c.blue),
    "function.method.call": syntax(c.blue),
    "function.decorator": syntax(c.pink),
    "constructor": syntax(c.greenAlt),

    // Operators
    "operator": syntax(c.yellow),

    // Keywords
    "keyword": syntax(c.yellow),
    "keyword.modifier": syntax(c.yellow),
    "keyword.type": syntax(c.turquoise),
    "keyword.coroutine": syntax(c.yellow),
    "keyword.function": syntax(c.turquoise),
    "keyword.operator": syntax(c.yellow),
    "keyword.import": syntax(c.yellow),
    "keyword.repeat": syntax(c.yellow),
    "keyword.return": syntax(c.yellow),
    "keyword.debug": syntax(c.yellow),
    "keyword.exception": syntax(c.yellow),
    "keyword.conditional": syntax(c.yellow),
    "keyword.conditional.ternary": syntax(c.yellow),
    "keyword.directive": syntax(c.pink),
    "keyword.directive.define": syntax(c.pink),
    "keyword.export": syntax(c.yellow),

    // Punctuation
    "punctuation": syntax(t.overlay2),
    "punctuation.delimiter": syntax(t.overlay2),
    "punctuation.bracket": syntax(t.overlay2),
    "punctuation.special": syntax(c.pink),
    "punctuation.special.symbol": syntax(c.salmon),
    "punctuation.list_marker": syntax(c.blue),

    // Comments
    "comment": syntax(t.overlay2, "italic"),
    "comment.doc": syntax(t.overlay2, "italic"),
    "comment.documentation": syntax(t.overlay2, "italic"),
    "comment.error": syntax(c.red, "italic"),
    "comment.warning": syntax(c.yellow, "italic"),
    "comment.hint": syntax(c.blue, "italic"),
    "comment.todo": syntax(c.orange, "italic"),
    "comment.note": syntax(c.turquoise, "italic"),

    // Diff
    "diff.plus": syntax(c.green),
    "diff.minus": syntax(c.red),

    // Tags (HTML/XML)
    "tag": syntax(c.blue),
    "tag.attribute": syntax(c.yellow, "italic"),
    "tag.delimiter": syntax(c.turquoise),
    "tag.doctype": syntax(c.purple),

    // Legacy & Misc
    "parameter": syntax(c.pink),
    "field": syntax(c.orange),
    "namespace": syntax(c.yellow, "italic"),
    "symbol": syntax(c.pink),
    "text": syntax(t.text),
    "emphasis.strong": syntax(c.salmon, null, 700),
    "emphasis": syntax(c.salmon, "italic"),
    "embedded": syntax(c.salmon),
    "text.literal": syntax(c.green),

    // Zed specific
    "concept": syntax(c.turquoise),
    "enum": syntax(c.turquoise, null, 700),
    "hint": syntax(t.overlay1, "italic"),
    "link_text": syntax(c.blue),
    "link_uri": syntax(c.blue, "italic"),
    "parent": syntax(c.orange),
    "predictive": syntax(t.overlay0),
    "predoc": syntax(c.red),
    "primary": syntax(c.salmon),
    "title": syntax(t.text, null, 800),
    "variant": syntax(c.red),
  };
}

/**
 * Generate a complete Zed theme from a Poro palette
 */
export function generateTheme(palette: PoroPalette): ZedTheme {
  const p = palette;
  const colors = p.colors;
  const levels = p.levels;
  const surfaces = p.surfaces;
  const texts = p.texts;

  const style: ZedThemeStyle = {
    // Accents for indent coloring
    accents: generateRainbow(p),

    // Vim mode
    "vim.mode.text": surfaces.crust,
    "vim.normal.background": colors.turquoise,
    "vim.helix_normal.background": colors.turquoise,
    "vim.visual.background": colors.purple,
    "vim.helix_select.background": colors.purple,
    "vim.insert.background": colors.green,
    "vim.visual_line.background": colors.purple,
    "vim.visual_block.background": colors.pink,
    "vim.replace.background": colors.red,

    // Background
    "background.appearance": "opaque",
    background: p.dark
      ? lighten(surfaces.mantle, 0.07)
      : darken(surfaces.mantle, 0.05),
    "elevated_surface.background": surfaces.mantle,
    "surface.background": surfaces.mantle,

    // Borders
    border: surfaces.surface0,
    "border.variant": mix(p.accent, surfaces.surface0, 0.8),
    "border.focused": colors.blue,
    "border.selected": p.accent,
    "border.transparent": colors.green,
    "border.disabled": texts.overlay0,

    // Elements
    "element.background": surfaces.crust,
    "element.hover": surfaces.surface0,
    "element.active": withAlpha(surfaces.surface2, 0.3),
    "element.selected": withAlpha(surfaces.surface0, 0.3),
    "element.disabled": texts.overlay0,
    "drop_target.background": withAlpha(surfaces.surface0, 0.4),

    // Ghost elements
    "ghost_element.background": "#00000000",
    "ghost_element.hover": withAlpha(surfaces.surface1, 0.3),
    "ghost_element.active": withAlpha(surfaces.surface2, 0.6),
    "ghost_element.selected": p.dark
      ? withAlpha(lighten(surfaces.surface2, 0.1), 0.4)
      : withAlpha(darken(surfaces.surface2, 0.1), 0.4),
    "ghost_element.disabled": texts.overlay0,

    // Text
    text: texts.text,
    "text.muted": texts.subtext1,
    "text.placeholder": surfaces.surface2,
    "text.disabled": surfaces.surface1,
    "text.accent": p.accent,

    // Icons
    icon: texts.text,
    "icon.muted": texts.overlay1,
    "icon.disabled": texts.overlay0,
    "icon.placeholder": surfaces.surface2,
    "icon.accent": p.accent,

    // Bars
    "status_bar.background": surfaces.crust,
    "title_bar.background": surfaces.crust,
    "title_bar.inactive_background": lighten(surfaces.crust, 0.03),
    "toolbar.background": surfaces.base,
    "tab_bar.background": surfaces.crust,
    "tab.inactive_background": darken(surfaces.crust, 0.03),
    "tab.active_background": surfaces.base,

    // Panels
    "panel.background": surfaces.mantle,
    "panel.focused_border": texts.text,
    "panel.indent_guide": withAlpha(surfaces.surface0, 0.6),
    "panel.indent_guide_active": surfaces.surface2,
    "panel.indent_guide_hover": p.accent,
    "panel.overlay_background": surfaces.crust,
    "pane.focused_border": texts.text,
    "pane_group.border": surfaces.surface0,

    // Search
    "search.match_background": withAlpha(colors.turquoise, 0.2),

    // Scrollbar
    "scrollbar.thumb.background": withAlpha(surfaces.surface2, 0.5),
    "scrollbar.thumb.hover_background": texts.overlay0,
    "scrollbar.thumb.active_background": null,
    "scrollbar.thumb.border": null,
    "scrollbar.track.background": surfaces.crust,
    "scrollbar.track.border": withAlpha(texts.text, 0.07),

    // Minimap
    "minimap.thumb.background": withAlpha(p.accent, 0.2),
    "minimap.thumb.hover_background": withAlpha(p.accent, 0.4),
    "minimap.thumb.active_background": withAlpha(p.accent, 0.6),
    "minimap.thumb.border": null,

    // Editor
    "editor.foreground": texts.text,
    "editor.background": surfaces.base,
    "editor.gutter.background": surfaces.base,
    "editor.subheader.background": surfaces.mantle,
    "editor.active_line.background": withAlpha(texts.text, 0.07),
    "editor.highlighted_line.background": null,
    "editor.line_number": texts.overlay1,
    "editor.active_line_number": p.accent,
    "editor.invisible": withAlpha(texts.overlay2, 0.4),
    "editor.wrap_guide": surfaces.surface2,
    "editor.active_wrap_guide": surfaces.surface2,
    "editor.document_highlight.bracket_background": withAlpha(p.accent, 0.09),
    "editor.document_highlight.read_background": withAlpha(texts.subtext0, 0.16),
    "editor.document_highlight.write_background": withAlpha(texts.subtext0, 0.16),
    "editor.indent_guide": withAlpha(surfaces.surface0, 0.6),
    "editor.indent_guide_active": surfaces.surface2,

    // Terminal
    "terminal.background": surfaces.base,
    "terminal.ansi.background": surfaces.base,
    "terminal.foreground": texts.text,
    "terminal.dim_foreground": texts.overlay1,
    "terminal.bright_foreground": texts.text,
    "terminal.ansi.black": p.dark ? surfaces.surface1 : texts.subtext1,
    "terminal.ansi.white": p.dark ? texts.subtext0 : surfaces.surface2,
    "terminal.ansi.red": colors.red,
    "terminal.ansi.green": colors.green,
    "terminal.ansi.yellow": colors.yellow,
    "terminal.ansi.blue": colors.blue,
    "terminal.ansi.magenta": colors.pink,
    "terminal.ansi.cyan": colors.turquoise,
    "terminal.ansi.bright_black": p.dark ? surfaces.surface2 : texts.subtext0,
    "terminal.ansi.bright_white": p.dark ? texts.subtext1 : surfaces.surface1,
    "terminal.ansi.bright_red": lighten(colors.red, 0.1),
    "terminal.ansi.bright_green": lighten(colors.green, 0.1),
    "terminal.ansi.bright_yellow": lighten(colors.yellow, 0.1),
    "terminal.ansi.bright_blue": lighten(colors.blue, 0.1),
    "terminal.ansi.bright_magenta": lighten(colors.pink, 0.1),
    "terminal.ansi.bright_cyan": lighten(colors.turquoise, 0.1),
    "terminal.ansi.dim_black": p.dark ? surfaces.surface1 : texts.subtext1,
    "terminal.ansi.dim_white": p.dark ? texts.subtext0 : surfaces.surface2,
    "terminal.ansi.dim_red": colors.red,
    "terminal.ansi.dim_green": colors.green,
    "terminal.ansi.dim_yellow": colors.yellow,
    "terminal.ansi.dim_blue": colors.blue,
    "terminal.ansi.dim_magenta": colors.pink,
    "terminal.ansi.dim_cyan": colors.turquoise,

    // Links
    "link_text.hover": colors.blue,

    // Git states
    conflict: colors.orange,
    "conflict.border": colors.orange,
    "conflict.background": withAlpha(colors.orange, 0.15),
    created: colors.green,
    "created.border": colors.green,
    "created.background": withAlpha(colors.green, 0.15),
    deleted: colors.red,
    "deleted.border": colors.red,
    "deleted.background": withAlpha(colors.red, 0.15),
    hidden: texts.overlay0,
    "hidden.border": texts.overlay0,
    "hidden.background": surfaces.mantle,
    hint: surfaces.surface2,
    "hint.border": surfaces.surface2,
    "hint.background": surfaces.mantle,
    ignored: texts.overlay0,
    "ignored.border": texts.overlay0,
    "ignored.background": withAlpha(texts.overlay0, 0.15),
    modified: colors.yellow,
    "modified.border": colors.yellow,
    "modified.background": withAlpha(colors.yellow, 0.15),
    predictive: texts.overlay0,
    "predictive.border": colors.purple,
    "predictive.background": surfaces.mantle,
    renamed: colors.turquoise,
    "renamed.border": colors.turquoise,
    "renamed.background": withAlpha(colors.turquoise, 0.15),

    // Diagnostics
    info: levels.info,
    "info.border": levels.info,
    "info.background": withAlpha(texts.overlay2, 0.2),
    warning: levels.warning,
    "warning.border": levels.warning,
    "warning.background": withAlpha(levels.warning, 0.12),
    error: levels.danger,
    "error.border": levels.danger,
    "error.background": withAlpha(levels.danger, 0.12),
    success: levels.success,
    "success.border": levels.success,
    "success.background": withAlpha(levels.success, 0.12),
    unreachable: colors.red,
    "unreachable.border": colors.red,
    "unreachable.background": withAlpha(colors.red, 0.12),

    // Players
    players: generatePlayers(p),

    // Version control
    "version_control.added": colors.green,
    "version_control.deleted": colors.red,
    "version_control.modified": colors.yellow,
    "version_control.renamed": colors.turquoise,
    "version_control.conflict": colors.orange,
    "version_control.conflict_marker.ours": withAlpha(colors.green, 0.2),
    "version_control.conflict_marker.theirs": withAlpha(colors.blue, 0.2),
    "version_control.ignored": texts.overlay0,

    // Debugger
    "debugger.accent": colors.red,
    "editor.debugger_active_line.background": withAlpha(colors.orange, 0.07),

    // Syntax
    syntax: generateSyntax(p),
  };

  return {
    name: `Nube ${p.dark ? "Dark" : "Light"} - ${p.name}`,
    appearance: p.dark ? "dark" : "light",
    style,
  };
}
