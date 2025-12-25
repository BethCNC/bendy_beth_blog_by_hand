# Gray & Neutral Color Usage
**Design System Semantic Guide (Authoritative)**

This document defines **how gray / neutral colors are used across the entire design system**.  
Its purpose is to eliminate ambiguity, prevent drift, and ensure accessibility **without relying on opacity**.

This guide reflects the **current pastel, soft, editorial color system** and supersedes all previous neutral documentation.

---

## Core philosophy (read this first)

Neutrals in this system are **role-based**, not aesthetic-only.

Each neutral family has a **job**:

- **neutral-cool** → structure, clarity, readability
- **neutral-warm** → large canvas + atmosphere
- **neutral (true gray)** → utility + disabled states

> **Rule:**  
> Small interactive components (buttons, inputs, toggles) **do NOT use warm surfaces**.  
> Warm neutrals are reserved for **large surfaces only**.

---

## The three neutral families

### 1) `neutral-cool` — Structure & readability
Use for:
- text
- icons
- borders
- dividers
- outlines
- UI chrome

**Visual intent:**  
Nearly achromatic gray with a subtle cool bias.  
It should *never* read as blue.

**Why:**  
Cool neutrals preserve contrast and legibility without visual warmth bleeding into text.

---

### 2) `neutral-warm` — Canvas & atmosphere
Use **only** for:
- page backgrounds
- large panels
- section containers
- card groups
- editorial surfaces

**Do NOT use for:**
- buttons
- inputs
- toggles
- chips
- small UI controls

**Visual intent:**  
Soft paper warmth. Calm. Background-only.

---

### 3) `neutral` (true gray) — Utility & inactive
Use for:
- disabled surfaces
- skeletons
- neutral fills where warmth/coolness would distract

**Visual intent:**  
Boring, flat, unmistakably inactive.

---

## Hard rules (non-negotiable)

- Components **must not** use raw ramp values directly  
- Components **must** use semantic tokens
- Disabled states **never use opacity**
- Brand colors are **never** used for disabled
- Small components **never use warm surfaces**
- A single component should not mix warm + cool neutrals unless explicitly required

---

## Semantic gray roles (required)

These semantic tokens must exist and be used consistently.

### Text
- `color.text.primary`
- `color.text.secondary`
- `color.text.tertiary`
- `color.text.placeholder`
- `color.text.disabled`
- `color.text.inverse`

### Surfaces
- `color.surface.canvas`
- `color.surface.subtle`
- `color.surface.default`
- `color.surface.raised`
- `color.surface.disabled`

### Borders
- `color.border.subtle`
- `color.border.default`
- `color.border.strong`
- `color.border.disabled`

### Icons
- `color.icon.default`
- `color.icon.muted`
- `color.icon.disabled`
- `color.icon.inverse`

---

## Canonical mappings — Light theme

### Text ladder (do not deviate)

| Role | Token |
|----|----|
| Primary | `neutral-cool.900` |
| Secondary | `neutral-cool.700` |
| Tertiary | `neutral-cool.600` |
| Placeholder | `neutral-cool.500` |
| Disabled | `neutral-cool.400` |
| Inverse | `white` |

> This ladder is intentional.  
> Skipping steps breaks hierarchy and accessibility.

---

### Surface usage (light)

#### Large surfaces only
| Semantic role | Token |
|----|----|
| Canvas | `neutral-warm.50` |
| Subtle section | `neutral-warm.100` |
| Grouped panels | `neutral-warm.200` |

#### Small components (default)
| Semantic role | Token |
|----|----|
| Default surface | `white` |
| Raised surface | `white` + shadow |
| Subtle surface | `neutral.50` |

> **Important:**  
> Buttons, inputs, toggles, pills, and controls use **neutral or white**, not warm tones.

---

### Borders (light)

| Role | Token |
|----|----|
| Subtle | `neutral-cool.200` |
| Default | `neutral-cool.300` |
| Strong | `neutral-cool.400` |
| Disabled | `neutral-cool.300` |

Borders remain visible even when disabled.

---

## Disabled states (no opacity, ever)

Disabled is communicated using **three simultaneous changes**:

### Required disabled recipe
- **Surface:** `neutral.100`
- **Border:** `neutral-cool.300`
- **Text / Icon:** `neutral-cool.400`

If one of these is missing, the disabled state is considered **incorrect**.

---

## Component patterns (gray-only examples)

### Buttons (neutral / secondary)

**Default**
- bg: `color.surface.default`
- border: `color.border.default`
- text: `color.text.primary`

**Disabled**
- bg: `color.surface.disabled`
- border: `color.border.disabled`
- text: `color.text.disabled`

---

### Inputs

**Default**
- bg: `color.surface.default`
- border: `color.border.default`
- text: `color.text.primary`
- placeholder: `color.text.placeholder`

**Disabled**
- bg: `color.surface.disabled`
- border: `color.border.disabled`
- text: `color.text.disabled`
- placeholder: `color.text.disabled`

---

### Cards / Panels

**Large cards**
- bg: `color.surface.subtle` (warm)
- border: `color.border.subtle`
- heading: `color.text.primary`
- body: `color.text.secondary`

**Small cards**
- bg: `color.surface.default`
- border: `color.border.subtle`

---

## Common mistakes (do not do these)

- Using warm neutrals for buttons or inputs
- Using opacity to signal disabled
- Picking `neutral-warm.300` because “it looks nice”
- Mixing warm + cool neutrals inside a single small component
- Using placeholder color instead of disabled color

---

## Quick audit checklist (2 minutes)

If something feels off, check:

- Is text following the **text ladder**?
- Are warm neutrals only used on **large surfaces**?
- Are disabled states using **surface + border + text**, not opacity?
- Are borders cool-neutral, not warm?
- Are components using semantic tokens instead of raw ramps?

If all answers are “yes,” the neutrals are correct.

---

## Why this system works

- Warm neutrals create mood **without harming legibility**
- Cool neutrals keep structure crisp
- True grays make disabled states obvious
- Semantic roles prevent aesthetic drift
- Accessibility is preserved without opacity hacks

This is intentional, restrained, and scalable.
