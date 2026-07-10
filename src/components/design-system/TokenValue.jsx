import useCssVar from './useCssVar'

// Inline text showing a CSS variable's live, resolved value — used inside
// TokenTable cells for tokens that don't need a color swatch (radius,
// shadow). Reacts to theme changes the same way TokenSwatch does.
export default function TokenValue({ name }) {
  const value = useCssVar(name)

  return <>{value || '—'}</>
}
