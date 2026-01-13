/**
 * Poro Theme - Type Definitions
 * Based on Zed theme schema v0.2.0
 */

// =============================================================================
// PALETTE TYPES
// =============================================================================

/**
 * Syntax colors for code highlighting
 */
export interface SyntaxColors {
  blue: string;
  green: string;
  greenAlt: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  salmon: string;
  turquoise: string;
  yellow: string;
}

/**
 * Semantic levels for UI feedback
 */
export interface SemanticLevels {
  danger: string;
  info: string;
  success: string;
  warning: string;
}

/**
 * Surface colors (backgrounds, from darkest to lightest)
 */
export interface SurfaceColors {
  crust: string;      // Darkest - status bar, title bar
  mantle: string;     // Panels, surfaces
  base: string;       // Editor background
  surface0: string;   // Borders, subtle elements
  surface1: string;   // Hover states
  surface2: string;   // Active elements
}

/**
 * Text colors (from muted to prominent)
 */
export interface TextColors {
  overlay0: string;   // Disabled, ignored
  overlay1: string;   // Line numbers, muted
  overlay2: string;   // Punctuation, comments
  subtext0: string;   // Hints
  subtext1: string;   // Muted text
  text: string;       // Main text
}

/**
 * Complete Poro flavor palette
 */
export interface PoroPalette {
  name: string;
  identifier: string;
  dark: boolean;
  colors: SyntaxColors;
  levels: SemanticLevels;
  surfaces: SurfaceColors;
  texts: TextColors;
  accent: string;     // Primary accent color
}

// =============================================================================
// ZED THEME TYPES
// =============================================================================

export interface SyntaxStyle {
  color: string;
  font_style: "italic" | "normal" | null;
  font_weight: number | null;
}

export interface PlayerStyle {
  cursor: string;
  selection: string;
  background: string;
}

export interface ZedThemeStyle {
  // Accents for indent-aware coloring
  accents: string[];

  // Vim mode indicators
  "vim.mode.text": string;
  "vim.normal.background": string;
  "vim.helix_normal.background": string;
  "vim.visual.background": string;
  "vim.helix_select.background": string;
  "vim.insert.background": string;
  "vim.visual_line.background": string;
  "vim.visual_block.background": string;
  "vim.replace.background": string;

  // Background
  "background.appearance": "opaque" | "transparent" | "blurred";
  background: string;
  "elevated_surface.background": string;
  "surface.background": string;

  // Borders
  border: string;
  "border.variant": string;
  "border.focused": string;
  "border.selected": string;
  "border.transparent": string;
  "border.disabled": string;

  // Elements
  "element.background": string;
  "element.hover": string;
  "element.active": string;
  "element.selected": string;
  "element.disabled": string;
  "drop_target.background": string;

  // Ghost elements
  "ghost_element.background": string;
  "ghost_element.hover": string;
  "ghost_element.active": string;
  "ghost_element.selected": string;
  "ghost_element.disabled": string;

  // Text
  text: string;
  "text.muted": string;
  "text.placeholder": string;
  "text.disabled": string;
  "text.accent": string;

  // Icons
  icon: string;
  "icon.muted": string;
  "icon.disabled": string;
  "icon.placeholder": string;
  "icon.accent": string;

  // Bars
  "status_bar.background": string;
  "title_bar.background": string;
  "title_bar.inactive_background": string;
  "toolbar.background": string;
  "tab_bar.background": string;
  "tab.inactive_background": string;
  "tab.active_background": string;

  // Panels
  "panel.background": string;
  "panel.focused_border": string;
  "panel.indent_guide": string;
  "panel.indent_guide_active": string;
  "panel.indent_guide_hover": string;
  "panel.overlay_background": string;
  "pane.focused_border": string;
  "pane_group.border": string;

  // Search
  "search.match_background": string;

  // Scrollbar
  "scrollbar.thumb.background": string;
  "scrollbar.thumb.hover_background": string;
  "scrollbar.thumb.active_background": string | null;
  "scrollbar.thumb.border": string | null;
  "scrollbar.track.background": string;
  "scrollbar.track.border": string;

  // Minimap
  "minimap.thumb.background": string;
  "minimap.thumb.hover_background": string;
  "minimap.thumb.active_background": string;
  "minimap.thumb.border": string | null;

  // Editor
  "editor.foreground": string;
  "editor.background": string;
  "editor.gutter.background": string;
  "editor.subheader.background": string;
  "editor.active_line.background": string;
  "editor.highlighted_line.background": string | null;
  "editor.line_number": string;
  "editor.active_line_number": string;
  "editor.invisible": string;
  "editor.wrap_guide": string;
  "editor.active_wrap_guide": string;
  "editor.document_highlight.bracket_background": string;
  "editor.document_highlight.read_background": string;
  "editor.document_highlight.write_background": string;
  "editor.indent_guide": string;
  "editor.indent_guide_active": string;

  // Terminal
  "terminal.background": string;
  "terminal.ansi.background": string;
  "terminal.foreground": string;
  "terminal.dim_foreground": string;
  "terminal.bright_foreground": string;
  "terminal.ansi.black": string;
  "terminal.ansi.white": string;
  "terminal.ansi.red": string;
  "terminal.ansi.green": string;
  "terminal.ansi.yellow": string;
  "terminal.ansi.blue": string;
  "terminal.ansi.magenta": string;
  "terminal.ansi.cyan": string;
  "terminal.ansi.bright_black": string;
  "terminal.ansi.bright_white": string;
  "terminal.ansi.bright_red": string;
  "terminal.ansi.bright_green": string;
  "terminal.ansi.bright_yellow": string;
  "terminal.ansi.bright_blue": string;
  "terminal.ansi.bright_magenta": string;
  "terminal.ansi.bright_cyan": string;
  "terminal.ansi.dim_black": string;
  "terminal.ansi.dim_white": string;
  "terminal.ansi.dim_red": string;
  "terminal.ansi.dim_green": string;
  "terminal.ansi.dim_yellow": string;
  "terminal.ansi.dim_blue": string;
  "terminal.ansi.dim_magenta": string;
  "terminal.ansi.dim_cyan": string;

  // Links
  "link_text.hover": string;

  // Git states
  conflict: string;
  "conflict.border": string;
  "conflict.background": string;
  created: string;
  "created.border": string;
  "created.background": string;
  deleted: string;
  "deleted.border": string;
  "deleted.background": string;
  hidden: string;
  "hidden.border": string;
  "hidden.background": string;
  hint: string;
  "hint.border": string;
  "hint.background": string;
  ignored: string;
  "ignored.border": string;
  "ignored.background": string;
  modified: string;
  "modified.border": string;
  "modified.background": string;
  predictive: string;
  "predictive.border": string;
  "predictive.background": string;
  renamed: string;
  "renamed.border": string;
  "renamed.background": string;

  // Diagnostics
  info: string;
  "info.border": string;
  "info.background": string;
  warning: string;
  "warning.border": string;
  "warning.background": string;
  error: string;
  "error.border": string;
  "error.background": string;
  success: string;
  "success.border": string;
  "success.background": string;
  unreachable: string;
  "unreachable.border": string;
  "unreachable.background": string;

  // Players (multi-cursor)
  players: PlayerStyle[];

  // Version control
  "version_control.added": string;
  "version_control.deleted": string;
  "version_control.modified": string;
  "version_control.renamed": string;
  "version_control.conflict": string;
  "version_control.conflict_marker.ours": string;
  "version_control.conflict_marker.theirs": string;
  "version_control.ignored": string;

  // Debugger
  "debugger.accent": string;
  "editor.debugger_active_line.background": string;

  // Syntax highlighting
  syntax: Record<string, SyntaxStyle>;
}

export interface ZedTheme {
  name: string;
  appearance: "dark" | "light";
  style: ZedThemeStyle;
}

export interface ZedThemeFile {
  $schema: string;
  name: string;
  author: string;
  themes: ZedTheme[];
}
