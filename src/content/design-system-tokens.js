// Curated inventory of the official Design System Lite tokens.
// Not an automatic scan of global.css — each entry is a deliberate inclusion.
// Values are never hardcoded here; TokenSwatch/TokenValue resolve them live
// via getComputedStyle so they always match the active theme.

export const primitiveColorTokens = [
  { name: '--color-black', figmaName: 'neutral/black' },
  { name: '--color-white', figmaName: 'neutral/white' },
  { name: '--color-muted', figmaName: 'neutral/600' },
  { name: '--color-surface', figmaName: 'neutral/100' },
  { name: '--color-divider', figmaName: 'neutral/200' },
  { name: '--color-border', figmaName: null },
]

export const semanticColorTokens = [
  { name: '--color-bg-page', category: 'background', figmaName: 'background/primary' },
  { name: '--color-bg-surface', category: 'background', figmaName: 'background/surface' },
  { name: '--color-bg-elevated', category: 'background', figmaName: null },
  { name: '--color-bg-inverse', category: 'background', figmaName: 'background/inverse' },
  { name: '--color-text-primary', category: 'text', figmaName: 'text/primary' },
  { name: '--color-text-secondary', category: 'text', figmaName: 'text/secondary' },
  { name: '--color-text-muted', category: 'text', figmaName: null },
  { name: '--color-text-inverse', category: 'text', figmaName: 'text/inverse' },
  { name: '--color-border-primary', category: 'border', figmaName: null },
  { name: '--color-border-subtle', category: 'border', figmaName: 'border/subtle' },
  { name: '--color-icon-primary', category: 'icon', figmaName: null },
  { name: '--color-link', category: 'link', figmaName: null },
  { name: '--color-focus-ring', category: 'focus', figmaName: null },
  { name: '--color-bg-action-primary', category: 'action', figmaName: 'action/primary' },
  { name: '--color-text-on-action-primary', category: 'action', figmaName: null },
  { name: '--color-danger', category: 'feedback', figmaName: null },
]

export const radiusTokens = [
  { name: '--radius-8', figmaName: 'radius/8' },
  { name: '--radius-card', figmaName: 'radius/16' },
  { name: '--radius-pill', figmaName: 'radius/pill' },
]

export const shadowTokens = [
  { name: '--shadow-card', figmaName: 'Elevation/Card' },
]

// Figma's named type scale. No equivalent CSS variables exist in the
// codebase — each font-size is written locally, per component. `key` is
// used to look up the localized "usage" copy in content/{pt,en}.
export const typographyScale = [
  { key: 'displayXXL', figmaName: 'Display/XXL', size: '320px', weight: 'Medium', lineHeight: '88%', letterSpacing: '-2.5%' },
  { key: 'displayHero', figmaName: 'Display/Hero', size: '160px', weight: 'Medium', lineHeight: '96%', letterSpacing: '-3%' },
  { key: 'displayXL', figmaName: 'Display/XL', size: '96px', weight: 'Medium', lineHeight: '100%', letterSpacing: '-3%' },
  { key: 'displayL', figmaName: 'Display/L', size: '72px', weight: 'Medium', lineHeight: '100%', letterSpacing: '-1%' },
  { key: 'h1', figmaName: 'Heading/H1', size: '48px', weight: 'Medium', lineHeight: '110%', letterSpacing: '-3%' },
  { key: 'h2', figmaName: 'Heading/H2', size: '36px', weight: 'Medium', lineHeight: '115%', letterSpacing: '-1.5%' },
  { key: 'h3', figmaName: 'Heading/H3', size: '24px', weight: 'Regular', lineHeight: '125%', letterSpacing: '-1%' },
  { key: 'bodyL', figmaName: 'Body/L', size: '20px', weight: 'Medium', lineHeight: '145%', letterSpacing: '0%' },
  { key: 'bodyM', figmaName: 'Body/M', size: '16px', weight: 'Regular', lineHeight: '150%', letterSpacing: '0%' },
  { key: 'bodyS', figmaName: 'Body/S', size: '14px', weight: 'Medium', lineHeight: '145%', letterSpacing: '0%' },
  { key: 'labelL', figmaName: 'Label/L', size: '24px', weight: 'Medium', lineHeight: '125%', letterSpacing: '0%' },
  { key: 'labelM', figmaName: 'Label/M', size: '16px', weight: 'Medium', lineHeight: '125%', letterSpacing: '0%' },
  { key: 'labelS', figmaName: 'Label/S', size: '14px', weight: 'Medium', lineHeight: '125%', letterSpacing: '0%' },
]

// Figma's 8-based spacing scale. Like typography, there is no --space-*
// token in the codebase — these are the documented spec values, not a
// live read of anything.
export const spacingScale = [
  { figmaName: 'space/4', value: '4px' },
  { figmaName: 'space/8', value: '8px' },
  { figmaName: 'space/16', value: '16px' },
  { figmaName: 'space/24', value: '24px' },
  { figmaName: 'space/32', value: '32px' },
  { figmaName: 'space/48', value: '48px' },
  { figmaName: 'space/64', value: '64px' },
  { figmaName: 'space/96', value: '96px' },
  { figmaName: 'space/120', value: '120px' },
]
