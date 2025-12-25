---
alwaysApply: true
---

# Design System Master Rules

## Focus States Policy

**CRITICAL RULE**: Focus states are **NOT** created in Figma and are **NOT** included in design tokens.

### Implementation
- Focus states are handled **strictly in CSS** during development
- No focus state tokens should be created in Tokens Studio
- No focus state variants should be designed in Figma components
- Focus states are applied via CSS `:focus`, `:focus-visible`, and `:focus-within` pseudo-classes

### Rationale
- Focus states are interactive behaviors that don't need to be represented in static design
- CSS provides better control over focus ring appearance, animations, and accessibility
- Reduces token bloat and simplifies the design system
- Aligns with modern web development practices

### What This Means
- ❌ Do NOT create `border.focus` tokens
- ❌ Do NOT create `ring.focus` tokens  
- ❌ Do NOT create `shadow.focus` tokens
- ❌ Do NOT create focus state variants in Figma
- ✅ Focus states are implemented in Tailwind CSS using utility classes
- ✅ Focus ring colors reference existing theme tokens (e.g., `theme-colors.info.default`)

---

## Border Radius Policy

**CRITICAL RULE**: Input components use **border radius of 0** (square corners).

### Implementation
- `component.input.radius` = `{theme-spacing.radius.none}` (0px)
- Input fields should have square corners, not rounded
- This applies to: input, textarea, select triggers

### Rationale
- Design system preference for square input fields
- Maintains consistency across form elements
- Aligns with specific design requirements

### What This Means
- ✅ Input radius token should reference `radius.none` (0px)
- ❌ Do NOT use `radius.md`, `radius.sm`, or any rounded values for inputs
- ✅ Other components (buttons, cards, etc.) may use rounded corners as specified

---

## Token Architecture Principles

### Component-Level Tokens
- Component tokens should reference theme tokens, not primitives directly
- Use semantic naming that describes purpose, not appearance
- Maintain hierarchical structure: primitives → theme → components

### Padding & Gap Strategy
- Padding tokens are for internal spacing within a component
- Gap tokens are for spacing between related elements (label-input, icon-text, etc.)
- Use consistent spacing scale from `theme-spacing`

### Size Variants
- Components should support size variants (sm, default, lg) when applicable
- Size variants should include: padding, typography, height, icon size
- Structure should match button component pattern

---

## Design-to-Development Workflow

### Figma → Tokens Studio → Tailwind CSS

1. **Design in Figma**: Create components with tokens applied
2. **Manage in Tokens Studio**: Organize and export tokens
3. **Transform with Style Dictionary**: Convert to CSS variables
4. **Use in Tailwind**: Map to utility classes via `tailwind.config.js`

### Focus States Implementation
- Designers: Do not create focus states in Figma
- Developers: Implement focus states in CSS using existing color tokens
- Example: `focus:ring-2 focus:ring-blue-500` using `theme-colors.info.default`

---

## Version
**Last Updated**: 2025  
**Status**: Active Design System Rules

