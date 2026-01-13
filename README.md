# Nube Theme

<p align="center">
  <strong>A cozy and vibrant theme collection for <a href="https://zed.dev">Zed</a></strong>
</p>

<p align="center">
  17 carefully crafted color themes with semantic syntax highlighting
</p>

---

## Features

- **17 Theme Variants** — From cool Aurora to warm Ember, electric Neon to soft Sorbet
- **Dark & Light Modes** — 13 dark themes + 4 light themes
- **High Contrast Options** — Crystal family for accessibility needs
- **Semantic Syntax Highlighting** — Consistent color meanings across all themes
- **Full Zed Integration** — Editor, terminal, Git, panels, and Vim mode support
- **Programmatic Generation** — Built with TypeScript for consistency and maintainability

---

## Themes

### Dark Themes

| Family | Theme | Description |
|--------|-------|-------------|
| **Aurora** | Frost | Cool blue-gray tones with icy accents |
| | Storm | Warmer variant with atmospheric tones |
| | Berry | Deep blue with berry undertones |
| **Ember** | Terra | Warm earthy tones like glowing embers |
| | Steel | Cool metallic variant |
| | Stone | Neutral gray, balanced palette |
| **Neon** | Grape | Deep purple with electric colors |
| | Void | Pure dark with vibrant neon accents |
| **Crystal** | Onyx | High contrast dark (accessibility) |
| | Cosmos | High contrast deep blue |
| — | Eclipse | Warm teal sunset palette |
| — | Depths | Deep ocean vibes, calming tones |
| — | Espresso | Warm coffee-inspired browns |

### Light Themes

| Family | Theme | Description |
|--------|--------|-------------|
| — | Daylight | Clean and bright, classic light |
| **Sorbet** | Cherry | Soft pink, romantic tones |
| | Mint | Fresh green, natural vibes |
| | Grape | Soft purple, gentle aesthetic |

---

## Installation

### From Zed Extensions (Recommended)

1. Open Zed
2. Press `Cmd+Shift+X` (macOS) or `Ctrl+Shift+X` (Linux)
3. Search for **"Nube"**
4. Click **Install**

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/nube/nube-theme.git

# Copy themes to Zed config
mkdir -p ~/.config/zed/themes
cp nube-theme/themes/*.json ~/.config/zed/themes/

# Restart Zed and select your theme in Settings
```

---

## Color Philosophy

### Semantic Color System

Each color has a consistent meaning across all 17 themes:

| Color | Usage |
|-------|-------|
| **Blue** | Functions, methods |
| **Green** | Strings, success states |
| **Yellow** | Keywords, operators |
| **Orange** | Properties, attributes |
| **Pink** | Parameters, decorators |
| **Purple** | Types, classes |
| **Red** | Constants, errors |
| **Turquoise** | Documentation, tags |
| **Salmon** | Special symbols, emphasis |

### Surface Hierarchy

```
crust   ████  Darkest  — Status bar, title bar
mantle  ████  Dark     — Panels, sidebars
base    ████  Default  — Editor background
surface ████  Elevated — Hover states, selections
```

### Text Hierarchy

```
overlay ████  Muted    — Disabled, ignored
subtext ████  Medium   — Hints, secondary
text    ████  Primary  — Main content
```

---

## Development

### Prerequisites

- [Bun](https://bun.sh) v1.1.0+
- TypeScript 5.7+

### Setup

```bash
# Install dependencies
bun install

# Generate theme files
bun run build

# Watch mode (auto-rebuild)
bun run dev

# Clean generated files
bun run clean
```

### Project Structure

```
nube-theme/
├── src/
│   ├── index.ts       # Main entry — orchestrates generation
│   ├── types.ts       # TypeScript definitions (Zed schema)
│   ├── palettes.ts    # 17 color palette definitions
│   └── generator.ts   # Converts palettes → Zed JSON
├── themes/            # Generated JSON files
│   ├── nube.json           # All 17 themes (376KB)
│   ├── nube-aurora.json    # Aurora family (3 themes)
│   ├── nube-ember.json     # Ember family (3 themes)
│   ├── nube-neon.json      # Neon family (2 themes)
│   ├── nube-crystal.json   # Crystal family (2 themes)
│   └── nube-light.json     # Light themes (4 themes)
├── extension.toml     # Zed extension manifest
└── package.json
```

### Adding a New Theme

1. Define a new palette in `src/palettes.ts`:

```typescript
const myTheme: NubePalette = {
  name: "My Theme",
  identifier: "my-theme",
  dark: true,
  surfaces: generateSurfacesDark("#1a1a2e"),
  texts: generateTextsDark("#1a1a2e"),
  syntax: {
    blue: "#7aa2f7",
    green: "#9ece6a",
    // ... other syntax colors
  },
  semantic: {
    danger: "#f7768e",
    info: "#7aa2f7",
    success: "#9ece6a",
    warning: "#e0af68",
  },
  accent: "#7aa2f7",
};
```

2. Add it to the `palettes` array in `src/index.ts`
3. Run `bun run build`

---

## Technical Details

### Generated Properties

Each theme generates **300+ color properties** covering:

- **Vim Mode** — 7 mode indicators (normal, insert, visual, etc.)
- **Editor** — Foreground, gutter, active line, indent guides
- **Terminal** — 24 ANSI colors (normal, bright, dim variants)
- **Git States** — 8 states (modified, added, deleted, conflict, etc.)
- **Diagnostics** — Error, warning, info, success, hint
- **Syntax** — 70+ token types with font styles
- **Players** — 7 multi-cursor collaboration colors
- **UI Elements** — Panels, tabs, scrollbars, search, minimap

### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `colord` | 2.9.3 | Color manipulation |
| `typescript` | 5.7.0 | Type safety |
| `@types/bun` | 1.1.0 | Bun runtime types |

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/meastblue"><strong>meastblue</strong></a>
</p>
