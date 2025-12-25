# Shadcn Input Component - Token Requirements Report

## Overview
This report documents all design tokens required for implementing Shadcn UI Input components in your Figma → Tokens Studio → Tailwind CSS workflow.

---

## 1. SPACING TOKENS (Padding & Gaps)

### Required Spacing Tokens

#### Padding (Internal Spacing)
The input component requires horizontal and vertical padding tokens:

| Token Path | Current Value | Usage | Recommended |
|------------|---------------|-------|-------------|
| `theme-spacing.xs` | 8px | Vertical padding (top/bottom) | ✅ Available |
| `theme-spacing.sm` | 12px | Alternative vertical padding | ✅ Available |
| `theme-spacing.md` | 16px | Horizontal padding (left/right) | ✅ Available |
| `theme-spacing.lg` | 24px | Large input padding | ✅ Available |

**Figma/Tokens Studio Setup:**
- Create component-level tokens:
  - `components.input.padding.x` → References `{theme-spacing.md}` (16px)
  - `components.input.padding.y` → References `{theme-spacing.xs}` (8px)
  - `components.input.padding.x-sm` → References `{theme-spacing.sm}` (12px) for small variant
  - `components.input.padding.y-sm` → References `{theme-spacing.xs}` (8px) for small variant

#### Gap (Icon/Element Spacing)
For inputs with icons or helper text:

| Token Path | Current Value | Usage | Recommended |
|------------|---------------|-------|-------------|
| `theme-spacing.gap.xs` | 4px | Gap between icon and text | ✅ Available |
| `theme-spacing.gap.sm` | 8px | Standard gap for icon spacing | ✅ Available |
| `theme-spacing.gap.md` | 16px | Gap for helper text spacing | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.gap.icon` → References `{theme-spacing.gap.sm}` (8px)
- `components.input.gap.helper` → References `{theme-spacing.gap.xs}` (4px)

---

## 2. BORDER RADIUS TOKENS

### Required Border Radius Tokens

| Token Path | Current Value | Usage | Recommended |
|------------|---------------|-------|-------------|
| `theme-spacing.radius.none` | 0px | Square inputs | ✅ Available |
| `theme-spacing.radius.xs` | 2px | Subtle rounding | ✅ Available |
| `theme-spacing.radius.sm` | 4px | Standard small rounding | ✅ Available |
| `theme-spacing.radius.md` | 6px | **Standard input rounding (default)** | ✅ Available |
| `theme-spacing.radius.lg` | 8px | Large input rounding | ✅ Available |
| `theme-spacing.radius.full` | 9999px | Pill-shaped inputs | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.radius.default` → References `{theme-spacing.radius.md}` (6px)
- `components.input.radius.sm` → References `{theme-spacing.radius.sm}` (4px)
- `components.input.radius.lg` → References `{theme-spacing.radius.lg}` (8px)

**Shadcn Default:** Typically uses `md` (6px) for standard inputs.

---

## 3. BORDER WIDTH TOKENS

### Required Border Width Tokens

| Token Path | Current Value | Usage | Recommended |
|------------|---------------|-------|-------------|
| `theme-spacing.border-width.none` | 0px | No border | ✅ Available |
| `theme-spacing.border-width.default` | 1px | **Standard input border** | ✅ Available |
| `theme-spacing.border-width.sm` | 2px | Thicker border (focus state) | ✅ Available |
| `theme-spacing.border-width.md` | 4px | Very thick (not typical for inputs) | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.borderWidth.default` → References `{theme-spacing.border-width.default}` (1px)
- `components.input.borderWidth.focus` → References `{theme-spacing.border-width.sm}` (2px)

---

## 4. COLOR TOKENS

### Background Colors

| Token Path | Current Value | Usage | Status |
|------------|---------------|-------|--------|
| `theme-colors.background.default` | `{colors.white}` | Default input background | ✅ Available |
| `theme-colors.background.disabled` | `{colors.neutral-warm.100}` | Disabled state background | ✅ Available |
| `theme-colors.background.elevated` | `{colors.neutral-warm.100}` | Alternative background | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.background.default` → References `{theme-colors.background.default}`
- `components.input.background.disabled` → References `{theme-colors.background.disabled}`
- `components.input.background.hover` → References `{theme-colors.background.default}` (or subtle variant)

### Border Colors

| Token Path | Current Value | Usage | Status |
|------------|---------------|-------|--------|
| `theme-colors.border.default` | `{colors.neutral-warm.400}` | Default border | ✅ Available |
| `theme-colors.border.active` | `{colors.neutral-warm.600}` | Active/focused border | ✅ Available |
| `theme-colors.border.strong` | `{colors.neutral-warm.600}` | Strong border | ✅ Available |
| `theme-colors.border.info` | `{colors.blue.500}` | Focus ring color | ✅ Available |
| `theme-colors.danger.default` | `{colors.red.400}` | Error state border | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.border.default` → References `{theme-colors.border.default}`
- `components.input.border.focus` → References `{theme-colors.border.info}` (blue focus ring)
- `components.input.border.error` → References `{theme-colors.danger.default}`
- `components.input.border.disabled` → References `{theme-colors.foreground.disabled}`

### Text/Foreground Colors

| Token Path | Current Value | Usage | Status |
|------------|---------------|-------|--------|
| `theme-colors.foreground.default` | `{colors.black}` | Input text color | ✅ Available |
| `theme-colors.foreground.placeholder` | `{colors.neutral-warm.600}` | Placeholder text | ✅ Available |
| `theme-colors.foreground.disabled` | `{colors.neutral-warm.500}` | Disabled text | ✅ Available |
| `theme-colors.foreground.error` | `{colors.red.50}` | Error message text | ✅ Available |
| `theme-colors.foreground.muted` | `{colors.neutral-warm.950}` | Helper text | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.text.default` → References `{theme-colors.foreground.default}`
- `components.input.text.placeholder` → References `{theme-colors.foreground.placeholder}`
- `components.input.text.disabled` → References `{theme-colors.foreground.disabled}`
- `components.input.text.error` → References `{theme-colors.foreground.error}`

### Focus Ring Color

| Token Path | Current Value | Usage | Status |
|------------|---------------|-------|--------|
| `theme-colors.info.default` | `{colors.blue.500}` | Focus ring color | ✅ Available |
| `theme-colors.info.hover` | `{colors.blue.600}` | Alternative focus | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.ring.focus` → References `{theme-colors.info.default}` with opacity

---

## 5. TYPOGRAPHY TOKENS

### Required Typography Tokens

| Token Path | Usage | Status |
|------------|-------|--------|
| `brand_typography.text-base.medium` | Default input text | ✅ Available |
| `brand_typography.text-sm.medium` | Small variant text | ✅ Available |
| `brand_typography.text-xs.regular` | Helper text, error messages | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.textStyle.default` → References `{brand_typography.text-base.medium}`
- `components.input.textStyle.sm` → References `{brand_typography.text-sm.medium}`
- `components.input.textStyle.helper` → References `{brand_typography.text-xs.regular}`

**Key Typography Properties Needed:**
- Font Family: `{font-family.font-sans}` (DM Sans)
- Font Size: `{font-size.text-base}` (16px default) or `{font-size.text-sm}` (14px small)
- Font Weight: `{font-weight.sans.font-medium-500}` (Medium)
- Line Height: `{absolute.line-height.text-base.leading-normal}`

---

## 6. SIZING TOKENS (Height)

### Required Height Tokens

| Token Path | Usage | Recommended |
|------------|-------|-------------|
| `components.input.height.default` | Standard input height | Create: ~40px (padding-y × 2 + line-height) |
| `components.input.height.sm` | Small input height | Create: ~32px |
| `components.input.height.lg` | Large input height | Create: ~48px |

**Figma/Tokens Studio Setup:**
- `components.input.height.default` → Calculate: `{theme-spacing.xs} * 2 + line-height` ≈ 40px
- `components.input.height.sm` → Calculate: `{theme-spacing.xs} * 2 + line-height-sm` ≈ 32px
- `components.input.height.lg` → Calculate: `{theme-spacing.sm} * 2 + line-height` ≈ 48px

---

## 7. OPACITY TOKENS

### Required Opacity Tokens

| Token Path | Current Value | Usage | Status |
|------------|---------------|-------|--------|
| `opacity.disabled` | 50% | Disabled state opacity | ✅ Available |
| `opacity.border` | 30% | Subtle border opacity | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.opacity.disabled` → References `{opacity.disabled}`
- `components.input.opacity.placeholder` → Create: 60% (or use existing)

---

## 8. SHADOW TOKENS (Focus States)

### Required Shadow Tokens

| Token Path | Usage | Status |
|------------|-------|--------|
| `tw_effects.shadow.sm` | Subtle focus shadow | ✅ Available |
| `tw_effects.shadow.default` | Standard focus ring | ✅ Available |

**Figma/Tokens Studio Setup:**
- `components.input.shadow.focus` → References `{tw_effects.shadow.sm}` with blue color
- Create a custom focus ring shadow using `{theme-colors.info.default}` with low opacity

---

## COMPLETE TOKEN STRUCTURE FOR FIGMA/TOKENS STUDIO

### Recommended Component Token Structure

```json
{
  "components": {
    "input": {
      "padding": {
        "x": {
          "$type": "dimension",
          "$value": "{theme-spacing.md}",
          "$description": "Horizontal padding (16px)"
        },
        "y": {
          "$type": "dimension",
          "$value": "{theme-spacing.xs}",
          "$description": "Vertical padding (8px)"
        },
        "x-sm": {
          "$type": "dimension",
          "$value": "{theme-spacing.sm}",
          "$description": "Small variant horizontal padding (12px)"
        },
        "y-sm": {
          "$type": "dimension",
          "$value": "{theme-spacing.xs}",
          "$description": "Small variant vertical padding (8px)"
        }
      },
      "gap": {
        "icon": {
          "$type": "dimension",
          "$value": "{theme-spacing.gap.sm}",
          "$description": "Gap between icon and text (8px)"
        },
        "helper": {
          "$type": "dimension",
          "$value": "{theme-spacing.gap.xs}",
          "$description": "Gap for helper text (4px)"
        }
      },
      "radius": {
        "default": {
          "$type": "dimension",
          "$value": "{theme-spacing.radius.md}",
          "$description": "Default border radius (6px)"
        },
        "sm": {
          "$type": "dimension",
          "$value": "{theme-spacing.radius.sm}",
          "$description": "Small variant radius (4px)"
        },
        "lg": {
          "$type": "dimension",
          "$value": "{theme-spacing.radius.lg}",
          "$description": "Large variant radius (8px)"
        }
      },
      "borderWidth": {
        "default": {
          "$type": "dimension",
          "$value": "{theme-spacing.border-width.default}",
          "$description": "Default border width (1px)"
        },
        "focus": {
          "$type": "dimension",
          "$value": "{theme-spacing.border-width.sm}",
          "$description": "Focus state border width (2px)"
        }
      },
      "height": {
        "default": {
          "$type": "dimension",
          "$value": "40px",
          "$description": "Default input height"
        },
        "sm": {
          "$type": "dimension",
          "$value": "32px",
          "$description": "Small input height"
        },
        "lg": {
          "$type": "dimension",
          "$value": "48px",
          "$description": "Large input height"
        }
      },
      "background": {
        "default": {
          "$type": "color",
          "$value": "{theme-colors.background.default}"
        },
        "disabled": {
          "$type": "color",
          "$value": "{theme-colors.background.disabled}"
        },
        "hover": {
          "$type": "color",
          "$value": "{theme-colors.background.default}"
        }
      },
      "border": {
        "default": {
          "$type": "color",
          "$value": "{theme-colors.border.default}"
        },
        "focus": {
          "$type": "color",
          "$value": "{theme-colors.border.info}"
        },
        "error": {
          "$type": "color",
          "$value": "{theme-colors.danger.default}"
        },
        "disabled": {
          "$type": "color",
          "$value": "{theme-colors.foreground.disabled}"
        }
      },
      "text": {
        "default": {
          "$type": "color",
          "$value": "{theme-colors.foreground.default}"
        },
        "placeholder": {
          "$type": "color",
          "$value": "{theme-colors.foreground.placeholder}"
        },
        "disabled": {
          "$type": "color",
          "$value": "{theme-colors.foreground.disabled}"
        },
        "error": {
          "$type": "color",
          "$value": "{theme-colors.foreground.error}"
        }
      },
      "ring": {
        "focus": {
          "$type": "color",
          "$value": "{theme-colors.info.default}",
          "$description": "Focus ring color (blue)"
        }
      },
      "textStyle": {
        "default": {
          "$type": "typography",
          "$value": "{brand_typography.text-base.medium}"
        },
        "sm": {
          "$type": "typography",
          "$value": "{brand_typography.text-sm.medium}"
        },
        "helper": {
          "$type": "typography",
          "$value": "{brand_typography.text-xs.regular}"
        }
      },
      "opacity": {
        "disabled": {
          "$type": "opacity",
          "$value": "{opacity.disabled}"
        },
        "placeholder": {
          "$type": "opacity",
          "$value": "60%"
        }
      },
      "shadow": {
        "focus": {
          "$type": "boxShadow",
          "$value": {
            "color": "{theme-colors.info.default}",
            "opacity": "20%",
            "x": "0",
            "y": "0",
            "blur": "0",
            "spread": "2px",
            "type": "dropShadow"
          },
          "$description": "Focus ring shadow"
        }
      }
    }
  }
}
```

---

## TAILWIND CSS MAPPING

### Recommended Tailwind Config Mapping

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Spacing (Padding)
      padding: {
        'input-x': 'var(--spacing-input-padding-x)',
        'input-y': 'var(--spacing-input-padding-y)',
      },
      // Border Radius
      borderRadius: {
        'input': 'var(--radius-input-default)',
        'input-sm': 'var(--radius-input-sm)',
        'input-lg': 'var(--radius-input-lg)',
      },
      // Border Width
      borderWidth: {
        'input': 'var(--border-width-input-default)',
        'input-focus': 'var(--border-width-input-focus)',
      },
      // Colors
      colors: {
        'input': {
          'bg': 'var(--color-input-background-default)',
          'bg-disabled': 'var(--color-input-background-disabled)',
          'border': 'var(--color-input-border-default)',
          'border-focus': 'var(--color-input-border-focus)',
          'border-error': 'var(--color-input-border-error)',
          'text': 'var(--color-input-text-default)',
          'text-placeholder': 'var(--color-input-text-placeholder)',
          'ring': 'var(--color-input-ring-focus)',
        },
      },
      // Height
      height: {
        'input': 'var(--height-input-default)',
        'input-sm': 'var(--height-input-sm)',
        'input-lg': 'var(--height-input-lg)',
      },
    },
  },
}
```

---

## SUMMARY: TOKENS NEEDED

### ✅ Already Available in Your Token System:
- All spacing tokens (xs, sm, md, lg, xl, etc.)
- All border radius tokens (none, xs, sm, md, lg, xl, full)
- All border width tokens (none, default, sm, md, lg)
- All color tokens (background, border, foreground variants)
- Typography tokens (text-base, text-sm, text-xs)
- Opacity tokens (disabled, border)
- Shadow tokens (sm, default, md, lg, etc.)

### ⚠️ Need to Create (Component-Level Tokens):
1. **Input-specific padding tokens** (x, y, x-sm, y-sm)
2. **Input-specific gap tokens** (icon, helper)
3. **Input-specific height tokens** (default, sm, lg)
4. **Input-specific border tokens** (focus state)
5. **Input-specific text color tokens** (placeholder, error)
6. **Input-specific focus ring/shadow** (custom blue ring)

---

## RECOMMENDED WORKFLOW

### Step 1: Create Component Tokens in Tokens Studio
1. Create a new token set: `components/input`
2. Add all the component-level tokens listed above
3. Reference existing theme tokens where possible

### Step 2: Apply in Figma
1. Create Input component variants (default, small, large, error, disabled)
2. Apply component tokens to:
   - Padding (Auto Layout padding)
   - Border radius
   - Border width and color
   - Background color
   - Text color and typography
   - Focus ring (shadow effect)

### Step 3: Export to Tailwind
1. Use Style Dictionary to transform tokens
2. Map component tokens to Tailwind utilities
3. Use in component code with semantic class names

---

## EXAMPLE USAGE IN CODE

```tsx
// Using the tokens in a React component
<input
  className="
    h-input 
    px-input-x 
    py-input-y 
    rounded-input 
    border-input 
    border-input 
    bg-input-bg 
    text-input-text
    placeholder:text-input-text-placeholder
    focus:border-input-border-focus 
    focus:ring-2 
    focus:ring-input-ring
    disabled:bg-input-bg-disabled 
    disabled:text-input-text-disabled
    disabled:opacity-input-disabled
  "
/>
```

---

## NOTES

- **Shadcn Default Values**: Shadcn typically uses:
  - Padding: `px-3 py-2` (12px horizontal, 8px vertical)
  - Border Radius: `rounded-md` (6px)
  - Border Width: `border` (1px)
  - Focus Ring: `ring-2 ring-offset-2` with blue color

- **Accessibility**: Ensure focus states are clearly visible (WCAG 2.1 AA requires 3:1 contrast for focus indicators)

- **Responsive Considerations**: Consider creating responsive variants for mobile (smaller padding) if needed

---

*Report generated for: Figma → Tokens Studio → Tailwind CSS workflow*
*Date: 2025*

