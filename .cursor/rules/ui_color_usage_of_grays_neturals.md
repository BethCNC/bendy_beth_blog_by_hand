---
alwaysApply: false
---
# Disabled State Color Usage  
**Warm, Beachy UI Design System**

This document defines how **disabled UI states** should look and behave within this design system.  
It aligns with the system’s core principles: **warmth, clarity, accessibility, and calm editorial tone**.

---

## Purpose of Disabled States

Disabled states communicate that an element is:

- **Unavailable** (not interactive right now)
- **Intentional** (not broken or loading)
- **Contextual** (still part of the interface)

In this system, disabled elements should feel *quiet and resting*, not erased or visually punished.

---

## Design Principles

Disabled UI should:

- Reduce visual emphasis without disappearing
- Avoid opacity-only solutions
- Stay visually consistent with the environment
- Preserve legibility and hierarchy
- Maintain WCAG-accessible contrast where possible

Disabled ≠ error  
Disabled ≠ inactive brand color  
Disabled = **environmental quiet**

---

## Semantic Tokens for Disabled States

Disabled states are derived from the **neutral-warm** scale, which represents the system’s environmental surfaces (sand, paper, warmth).

### Token Mapping

| Semantic Token     | Primitive Token        | Hex       | Usage |
|-------------------|------------------------|-----------|-------|
| `bg-disabled`     | `neutral-warm.100`     | `#ede3d6` | Disabled buttons, inputs, cards |
| `text-disabled`   | `neutral-warm.500`     | `#a88763` | Labels, button text, helper text |
| `border-disabled` | `neutral-warm.300`     | `#d1b89a` | Input outlines, dividers |
| `icon-disabled`   | `neutral-warm.500`     | `#a88763` | Icons inside disabled components |

---

## Usage Guidelines

### Backgrounds
Use `bg-disabled` for:
- Disabled buttons
- Disabled form fields
- Non-interactive cards

This color should clearly differ from active surfaces while remaining warm and calm.

---

### Text
Use `text-disabled` for:
- Button labels
- Input text
- Helper or hint text inside disabled components

Text should remain readable, but visually secondary.

---

### Borders & Icons
Use subtle warmth for outlines and icons to avoid harsh contrast:
- Borders: `neutral-warm.300`
- Icons: same as disabled text

---

## Do / Don’t Rules

### Do
- Use **color shifts**, not opacity, to signal disabled state
- Keep disabled elements visually aligned with surrounding UI
- Apply disabled styles consistently across components
- Favor warmth over cool gray tones

### Don’t
- Use brand colors for disabled states
- Reduce opacity below ~50%
- Use neutral-cool grays for disabled UI
- Rely on disabled color alone to communicate state (cursor + behavior should also change)

---

## Accessibility Notes

- Disabled elements should still be legible
- Disabled text does not need to meet full contrast ratios if non-interactive, but should remain readable
- Never rely solely on opacity to indicate disabled state
- Cursor and interaction behavior must reinforce the visual state

---

## System Logic Summary

- **Active UI:** brand colors + neutral
- **Structure / chrome:** neutral & neutral-cool
- **Environment / background:** neutral-warm
- **Disabled:** darker, quieter neutral-warm

This keeps the system cohesive, accessible, and emotionally consistent.

---

## Version
Designed to pair with the **warm beachy neutral-warm scale** introduced in the current color primitives.

