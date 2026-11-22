# Spotto Design System

A comprehensive design token system extracted from Claude Artifact with three-layer architecture (Primitive → Semantic → Component).

## Overview

This design system follows industry best practices with a layered token architecture that enables:
- **Theme switching** (light/dark mode)
- **Consistent styling** across the application
- **Maintainable code** with single source of truth
- **Tailwind CSS v4 integration** for utility-first styling

## Architecture

### Three-Layer Token Structure

```
┌─────────────────────────────────────┐
│   PRIMITIVE TOKENS                  │
│   (Raw values: #ba5b3c, 1rem)      │
└─────────────┬───────────────────────┘
              │
              ↓
┌─────────────────────────────────────┐
│   SEMANTIC TOKENS                   │
│   (Purpose: --color-primary)        │
└─────────────┬───────────────────────┘
              │
              ↓
┌─────────────────────────────────────┐
│   COMPONENT TOKENS                  │
│   (Context: --button-primary-bg)    │
└─────────────────────────────────────┘
```

## Files

| File | Purpose |
|------|---------|
| `assets/design-tokens.json` | JSON token definitions (source of truth) |
| `assets/design-tokens.css` | CSS variables for standalone use |
| `app/globals.css` | Tailwind v4 integration with token system |

## Usage

### In Tailwind (Recommended)

The design tokens are automatically available through Tailwind's utility classes:

```tsx
// Colors
<div className="bg-background text-foreground">
<div className="bg-primary text-white">
<div className="text-muted border-border">

// Spacing
<div className="p-4 gap-6 m-8">

// Border radius
<button className="rounded-md"> {/* uses --radius-md */}
<div className="rounded-lg">

// Typography
<h1 className="font-serif text-xl">
<p className="font-sans text-base">
```

### With CSS Variables

For custom components or non-Tailwind usage:

```css
.custom-button {
  background: var(--color-brand-primary);
  color: var(--bg-page);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}

.custom-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
}
```

### In React Components

```tsx
export function CustomComponent() {
  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        color: 'var(--fg-primary)',
        padding: 'var(--spacing-6)'
      }}
    >
      Content
    </div>
  );
}
```

## Token Reference

### Colors

#### Primitive Colors
- **Grayscale**: `--color-gray-50` through `--color-gray-950`
- **Brand**: `--color-brand-primary` (#ba5b3c - warm brown/coral)
- **Base**: `--color-white`, `--color-black`

#### Semantic Colors (Theme-aware)

**Backgrounds:**
- `--bg-page` - Main page background
- `--bg-surface` - Card/component surfaces
- `--bg-secondary` - Secondary backgrounds

**Foreground:**
- `--fg-primary` - Primary text color
- `--fg-secondary` - Secondary text
- `--fg-muted` - Muted/disabled text

**Borders:**
- `--border-default` - Standard borders
- `--border-subtle` - Subtle dividers
- `--border-divider` - Section dividers

**Interactive:**
- `--interactive-hover` - Hover state overlay
- `--interactive-brand` - Brand color for CTAs

### Spacing Scale

Based on 0.25rem (4px) increments:

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `--spacing-0` | 0 | `p-0`, `m-0` |
| `--spacing-1` | 0.25rem (4px) | `p-1`, `m-1` |
| `--spacing-2` | 0.5rem (8px) | `p-2`, `m-2` |
| `--spacing-3` | 0.75rem (12px) | `p-3`, `m-3` |
| `--spacing-4` | 1rem (16px) | `p-4`, `m-4` |
| `--spacing-6` | 1.5rem (24px) | `p-6`, `m-6` |
| `--spacing-8` | 2rem (32px) | `p-8`, `m-8` |
| `--spacing-12` | 3rem (48px) | `p-12`, `m-12` |
| `--spacing-16` | 4rem (64px) | `p-16`, `m-16` |
| `--spacing-24` | 6rem (96px) | `p-24`, `m-24` |
| `--spacing-32` | 8rem (128px) | `p-32`, `m-32` |

### Typography

**Font Families:**
```css
--font-sans: anthropic-sans, anthropic-sans-roman-fallback, -apple-system, BlinkMacSystemFont, system-ui, sans-serif
--font-serif: anthropic-serif, ui-serif, Georgia, 'Times New Roman', serif
```

**Font Sizes:**
| Token | Value | Usage |
|-------|-------|-------|
| `--text-xs` | 0.75rem | Captions, labels |
| `--text-sm` | 0.8125rem | Small text, buttons |
| `--text-base` | 0.875rem | Body text |
| `--text-lg` | 1rem | Subheadings |
| `--text-xl` | 1.25rem | Headings |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 0.25rem | Small elements |
| `--radius-md` | 0.5rem | Buttons, inputs |
| `--radius-lg` | 0.875rem | Cards, modals |

## Component Examples

### Button Component

```tsx
// Using Tailwind utilities
<button className="bg-foreground text-background px-4 py-2 rounded-md text-sm hover:opacity-90">
  Primary Button
</button>

<button className="bg-transparent text-foreground px-4 py-2 rounded-md text-sm border border-border hover:bg-[var(--interactive-hover)]">
  Secondary Button
</button>
```

### Card Component

```tsx
<div className="bg-surface border border-subtle rounded-lg p-6">
  <h2 className="text-foreground font-serif text-xl mb-2">Card Title</h2>
  <p className="text-muted text-base">Card description text</p>
</div>
```

### Header Component

```tsx
<header className="h-10 bg-surface border-b border-subtle flex items-center justify-between px-4">
  <div>Logo</div>
  <nav>Navigation</nav>
</header>
```

## Dark Mode

Dark mode is handled automatically through:
1. **System preference**: `@media (prefers-color-scheme: dark)`
2. **Manual override**: Add `data-theme="dark"` to `<html>` tag

All semantic tokens automatically adjust when dark mode is active. No code changes needed.

## Best Practices

### ✅ DO

```css
/* Use semantic tokens */
background: var(--bg-surface);
color: var(--fg-primary);
border: 1px solid var(--border-default);
```

```tsx
// Use Tailwind utilities
<div className="bg-background text-foreground border-border">
```

### ❌ DON'T

```css
/* Never use raw values */
background: #ffffff;
color: #191919;
border: 1px solid rgba(0, 0, 0, 0.2);
```

```tsx
// Don't use arbitrary values when tokens exist
<div className="bg-[#ffffff] text-[#000000]">
```

### Token Selection Guide

1. **Always start with semantic tokens** (`--bg-*`, `--fg-*`, `--border-*`)
2. **Use primitive colors** (`--color-gray-500`) only for one-off designs
3. **Create component tokens** for repeated patterns
4. **Never hardcode values** - always reference a token

## Extending the System

### Adding New Semantic Tokens

Edit `app/globals.css`:

```css
:root {
  /* Add to light mode */
  --success-color: var(--color-green-500);
  --error-color: var(--color-red-500);
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Add dark mode variants */
    --success-color: var(--color-green-400);
    --error-color: var(--color-red-400);
  }
}

@theme inline {
  /* Make available to Tailwind */
  --color-success: var(--success-color);
  --color-error: var(--error-color);
}
```

### Adding Component Tokens

```css
:root {
  --card-bg: var(--bg-surface);
  --card-border: var(--border-subtle);
  --card-padding: var(--spacing-6);
  --card-radius: var(--radius-lg);
}
```

## Validation

To ensure token compliance, never commit code that:
- Uses hardcoded colors (e.g., `#ffffff`, `rgb(255, 255, 255)`)
- Uses hardcoded spacing values without tokens
- Bypasses the theme system

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- Design tokens JSON: `assets/design-tokens.json`

## Source

This design system was extracted from: https://claude.ai/artifact/3RMUHWaGqMvobfY7Y4PwX2#f661424d-a2b6
