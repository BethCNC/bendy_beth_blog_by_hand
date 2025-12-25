# Components Token Collection - Updated Analysis & Required Edits

## Executive Summary

This document provides an **UPDATED** comprehensive analysis of the `components/library` token collection in `tokens.json`, incorporating:
1. **Master Design System Rules** (focus states in CSS only, border radius 0)
2. **Figma Design Specifications** (from Shadcn UI Design System)
3. **Actual Spacing Measurements** (from Figma component analysis)
4. **Shadcn Component Requirements** (based on actual component structure)

**Status**: The components collection needs enhancements to support Shadcn components with correct spacing, gap tokens, and proper structure. **Focus states are excluded** per master rules.

---

## MASTER RULES REFERENCE

**See**: `.cursor/rules/DESIGN_SYSTEM_MASTER_RULES.md`

### Key Rules Applied:
1. ✅ **Focus States**: Handled strictly in CSS, NOT in Figma or tokens
2. ✅ **Border Radius**: Input components use `radius.none` (0px) - square corners
3. ✅ **Token Architecture**: Component tokens reference theme tokens, not primitives

---

## 1. FIGMA DESIGN ANALYSIS

### 1.1 Input Component Spacing (From Figma Design)

**Source**: Shadcn UI Design System Figma (nodes 13:1589, 2:285)

**Measured Values**:
| Element | Spacing | Value | Token Needed |
|---------|---------|-------|--------------|
| Label to Input Field | Vertical gap | **6px** | `gap.label` |
| Input Field Padding Left | Internal | **12px** | `padding.x` |
| Input Field Padding Right | Internal (icon space) | **56px** | `padding.x-right` or `padding.icon` |
| Input Field Padding Vertical | Internal | **8px** | `padding.y` |
| Input to Button | Horizontal gap | **8px** | `gap.button` |
| Input to Helper Text | Vertical gap | **6px** | `gap.helper` |
| Label to Input (Left Layout) | Horizontal gap | **16px** | `gap.label-horizontal` |

**Key Observations**:
- Input field has **asymmetric horizontal padding** (12px left, 56px right for icon space)
- Multiple gap contexts: label-input, input-button, input-helper
- Border radius shown as 6px in Figma, but **user requirement is 0px**

---

## 2. INPUT COMPONENT - DETAILED TOKEN REQUIREMENTS

### 2.1 Current Input Token Structure

**Location**: `components/library/component/input` (lines 3787-3862)

**Existing Tokens**:
```json
{
  "bg": { "default", "disabled" },
  "border": { "default", "disabled", "error" },
  "text": { "default", "placeholder", "disabled" },
  "radius": { single value = "none" ✅ CORRECT },
  "borderWidth": { single value },
  "padding": { "x", "y" },
  "textStyle": { single typography token },
  "label": { typography token }
}
```

### 2.2 Required Token Additions

#### **A. Padding Tokens - Asymmetric Horizontal Padding** ❌

**Current**: Single `padding.x` value (16px)

**Required**: Separate left and right padding to accommodate icon space

```json
"padding": {
  "x": {
    "left": {
      "$type": "dimension",
      "$value": "{theme-spacing.sm}",
      "$description": "Left padding (12px)"
    },
    "right": {
      "$type": "dimension",
      "$value": "{theme-spacing.xl}",
      "$description": "Right padding for icon space (32px) - OR use specific icon padding token"
    }
  },
  "y": {
    "$type": "dimension",
    "$value": "{theme-spacing.xs}",
    "$description": "Vertical padding (8px)"
  }
}
```

**Alternative Approach** (Better for icon variants):
```json
"padding": {
  "x": {
    "$type": "dimension",
    "$value": "{theme-spacing.sm}",
    "$description": "Horizontal padding (12px)"
  },
  "x-with-icon": {
    "$type": "dimension",
    "$value": "{theme-spacing.xl}",
    "$description": "Right padding when icon present (32px)"
  },
  "y": {
    "$type": "dimension",
    "$value": "{theme-spacing.xs}",
    "$description": "Vertical padding (8px)"
  }
}
```

**Figma Measurement**: `pl-[12px] pr-[56px] py-[8px]`
- Left: 12px = `theme-spacing.sm`
- Right: 56px (includes icon space) - **NEEDS VERIFICATION** - might be 32px + 24px icon
- Vertical: 8px = `theme-spacing.xs`

---

#### **B. Gap Tokens - Multiple Contexts** ❌

**Current**: No gap tokens for input component

**Required**: Gap tokens for different spacing contexts

```json
"gap": {
  "label": {
    "$type": "dimension",
    "$value": "{theme-spacing.gap.xs}",
    "$description": "Gap between label and input field (6px) - vertical"
  },
  "label-horizontal": {
    "$type": "dimension",
    "$value": "{theme-spacing.md}",
    "$description": "Gap between label and input when label is to the left (16px)"
  },
  "button": {
    "$type": "dimension",
    "$value": "{theme-spacing.gap.sm}",
    "$description": "Gap between input field and button (8px)"
  },
  "helper": {
    "$type": "dimension",
    "$value": "{theme-spacing.gap.xs}",
    "$description": "Gap between input field and helper text (6px)"
  },
  "icon": {
    "$type": "dimension",
    "$value": "{theme-spacing.gap.sm}",
    "$description": "Gap between icon and text inside input (8px)"
  }
}
```

**Figma Measurements**:
- Label to input (vertical): `gap-[6px]` = 6px
- Label to input (horizontal): `gap-[16px]` = 16px
- Input to button: `gap-[8px]` = 8px
- Input to helper: `gap-[6px]` = 6px

---

#### **C. Size Variants** ❌

**Current**: No size variants structure

**Required**: Size variants matching button component pattern

```json
"size": {
  "default": {
    "padding": {
      "x": { "$value": "{theme-spacing.sm}" },
      "y": { "$value": "{theme-spacing.xs}" }
    },
    "textStyle": {
      "$type": "typography",
      "$value": "{brand_typography.text-base.medium}"
    },
    "height": {
      "$type": "dimension",
      "$value": "40px",
      "$description": "Calculated: padding.y * 2 + line-height"
    }
  },
  "sm": {
    "padding": {
      "x": { "$value": "{theme-spacing.sm}" },
      "y": { "$value": "{theme-spacing.xs}" }
    },
    "textStyle": {
      "$type": "typography",
      "$value": "{brand_typography.text-sm.medium}"
    },
    "height": {
      "$type": "dimension",
      "$value": "32px"
    }
  }
}
```

**Figma Observations**:
- Default size: 16px font, 24px line-height, 8px vertical padding = ~40px height
- Small size: 14px font, 20px line-height, 8px vertical padding = ~36px height (but code shows 32px)

---

#### **D. Typography Variants** ❌

**Current**: Single `textStyle` token

**Required**: Typography variants for different text elements

```json
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
    "$value": "{brand_typography.text-sm.regular}",
    "$description": "Helper text style (14px, regular weight)"
  }
}
```

**Figma Measurements**:
- Input text (default): 16px, Regular, 24px line-height
- Input text (small): 14px, Regular, 20px line-height
- Helper text: 14px, Regular, 20px line-height
- Label: 14px, Medium, 20px line-height

---

#### **E. Text Error Color** ❌

**Current**: Missing error text color

**Required**: Error state text color

```json
"text": {
  "error": {
    "$type": "color",
    "$value": "{theme-colors.foreground.error}",
    "$description": "Error message text color"
  }
}
```

---

#### **F. Border Radius - VERIFY** ⚠️

**Current**: `radius` = `{theme-spacing.radius.none}` (0px) ✅ **CORRECT per user requirement**

**Figma Shows**: `rounded-[6px]` (6px) - **This is a design artifact, user wants 0px**

**Action**: Keep as `radius.none` (0px) - **NO CHANGE NEEDED**

---

#### **G. Height Tokens** ❌

**Current**: No height tokens

**Required**: Calculated height tokens for each size variant

```json
"height": {
  "default": {
    "$type": "dimension",
    "$value": "40px",
    "$description": "Default input height (padding.y * 2 + line-height)"
  },
  "sm": {
    "$type": "dimension",
    "$value": "32px",
    "$description": "Small input height"
  }
}
```

**Calculation**:
- Default: 8px (top) + 24px (line-height) + 8px (bottom) = 40px
- Small: 8px (top) + 20px (line-height) + 8px (bottom) = 36px (but Figma shows 32px - verify)

---

## 3. BUTTON COMPONENT - GAP TOKEN ANALYSIS

### 3.1 Current Button Structure

**Location**: `components/library/component/button` (lines 3417-3785)

**Existing Gap Token**: 
- `size.default.gap` = `{theme-spacing.gap.sm}` (8px) ✅
- `size.sm.gap` = `{theme-spacing.gap.xs}` (4px) ✅

**Analysis**: Button component already has gap tokens for icon spacing. This is correct.

**Input-Button Gap**: Needs to be defined in input component, not button component.

---

## 4. REMOVED REQUIREMENTS (Per Master Rules)

### 4.1 Focus State Tokens ❌ REMOVED

**Previous Requirement**: Add focus state tokens (border.focus, ring.focus, shadow.focus)

**New Status**: **NOT REQUIRED** - Focus states handled in CSS only

**Rationale**: Per master rules, focus states are implemented strictly in CSS, not in Figma or tokens.

**Action**: Remove all focus state token requirements from implementation plan.

---

### 4.2 Border Radius Variants ❌ REMOVED

**Previous Requirement**: Add radius.sm, radius.lg variants

**New Status**: **NOT REQUIRED** - Input uses radius.none (0px) only

**Rationale**: User requirement is square corners (0px) for inputs.

**Action**: Keep single radius token as `radius.none` (0px).

---

## 5. UPDATED TOKEN ADDITIONS SUMMARY

### 5.1 Critical Additions (Must Have)

1. **Input Padding - Asymmetric** ❌
   - Separate left/right padding OR icon-specific padding token
   - Left: 12px (`theme-spacing.sm`)
   - Right: 32px or 56px (needs verification - includes icon space)

2. **Input Gap Tokens** ❌
   - `gap.label` → 6px (vertical label-to-input)
   - `gap.label-horizontal` → 16px (horizontal label-to-input)
   - `gap.button` → 8px (input-to-button)
   - `gap.helper` → 6px (input-to-helper text)
   - `gap.icon` → 8px (icon-to-text inside input)

3. **Input Size Variants** ❌
   - Restructure to `size.default` and `size.sm`
   - Each size needs: padding, textStyle, height

4. **Input Typography Variants** ❌
   - `textStyle.default` (text-base, medium)
   - `textStyle.sm` (text-sm, medium)
   - `textStyle.helper` (text-sm, regular)

5. **Input Height Tokens** ❌
   - `height.default` → 40px
   - `height.sm` → 32px (verify calculation)

6. **Input Text Error** ❌
   - `text.error` → `{theme-colors.foreground.error}`

---

### 5.2 Important Additions (Should Have)

7. **Input Opacity Tokens** ⚠️
   - `opacity.disabled` → `{opacity.disabled}`
   - `opacity.placeholder` → 60%

8. **Input Background Hover** ⚠️
   - `bg.hover` → `{theme-colors.background.default}`

9. **Icon Disabled Tokens** ⚠️
   - Add `icon.disabled` to button and other components with icons

---

## 6. SPACING TOKEN VERIFICATION

### 6.1 Required Theme Spacing Tokens

Verify these exist in `theme/theme-spacing`:

| Token | Required Value | Current Status | Notes |
|-------|----------------|----------------|-------|
| `theme-spacing.sm` | 12px | ✅ Exists | For input padding left |
| `theme-spacing.xs` | 8px | ✅ Exists | For input padding vertical |
| `theme-spacing.md` | 16px | ✅ Exists | For label horizontal gap |
| `theme-spacing.xl` | 32px | ✅ Exists | For input padding right (if needed) |
| `theme-spacing.gap.xs` | 4px | ✅ Exists | For label/helper gaps (6px needed - verify) |
| `theme-spacing.gap.sm` | 8px | ✅ Exists | For button/icon gaps |

**Gap Token Issue**: 
- `gap.xs` = 4px, but Figma shows 6px needed
- `gap.sm` = 8px ✅ matches Figma

**Action Required**: 
- Verify if 6px gap should use `gap.xs` (4px) or create new `gap.6px` token
- OR use `theme-spacing.sm` (12px) divided conceptually, but better to have exact token

---

## 7. DETAILED TOKEN STRUCTURE - INPUT COMPONENT

### 7.1 Complete Recommended Structure

```json
{
  "component": {
    "input": {
      // EXISTING - Keep
      "bg": {
        "default": { "$value": "{theme-colors.background.default}" },
        "disabled": { "$value": "{theme-colors.background.disabled}" }
      },
      "border": {
        "default": { "$value": "{theme-colors.border.subtle}" },
        "disabled": { "$value": "{theme-colors.border.disabled}" },
        "error": { "$value": "{theme-colors.danger.default}" }
      },
      "text": {
        "default": { "$value": "{theme-colors.foreground.default}" },
        "placeholder": { "$value": "{theme-colors.foreground.placeholder}" },
        "disabled": { "$value": "{theme-colors.foreground.disabled}" },
        "error": { "$value": "{theme-colors.foreground.error}" }
      },
      "radius": {
        "$type": "dimension",
        "$value": "{theme-spacing.radius.none}",
        "$description": "Square corners (0px) - per user requirement"
      },
      "borderWidth": {
        "$type": "dimension",
        "$value": "{theme-spacing.border-width.default}"
      },
      "label": {
        "$type": "typography",
        "$value": {
          "fontFamily": "{font-family.font-sans}",
          "fontWeight": "{fontWeights.dm-sans-regular}",
          "lineHeight": "{absolute.line-height.text-base.leading-normal}",
          "fontSize": "{font-size.text-sm}",
          "letterSpacing": "{letter-spacing.tracking-normal}",
          "paragraphSpacing": "{paragraph-spacing.space-between.0}",
          "paragraphIndent": "{text-indent.indent-0}",
          "textCase": "{text-transform.normal-case}",
          "textDecoration": "{text-decoration-line.none}"
        }
      },
      
      // ADD: Padding Structure
      "padding": {
        "x": {
          "left": {
            "$type": "dimension",
            "$value": "{theme-spacing.sm}",
            "$description": "Left padding (12px)"
          },
          "right": {
            "$type": "dimension",
            "$value": "{theme-spacing.xl}",
            "$description": "Right padding for icon space (32px) - verify if 56px needed"
          }
        },
        "y": {
          "$type": "dimension",
          "$value": "{theme-spacing.xs}",
          "$description": "Vertical padding (8px)"
        }
      },
      
      // ADD: Gap Tokens
      "gap": {
        "label": {
          "$type": "dimension",
          "$value": "6px",
          "$description": "Gap between label and input (vertical) - 6px"
        },
        "label-horizontal": {
          "$type": "dimension",
          "$value": "{theme-spacing.md}",
          "$description": "Gap between label and input (horizontal layout) - 16px"
        },
        "button": {
          "$type": "dimension",
          "$value": "{theme-spacing.gap.sm}",
          "$description": "Gap between input and button - 8px"
        },
        "helper": {
          "$type": "dimension",
          "$value": "6px",
          "$description": "Gap between input and helper text - 6px"
        },
        "icon": {
          "$type": "dimension",
          "$value": "{theme-spacing.gap.sm}",
          "$description": "Gap between icon and text inside input - 8px"
        }
      },
      
      // ADD: Size Variants
      "size": {
        "default": {
          "padding": {
            "x": {
              "left": { "$value": "{theme-spacing.sm}" },
              "right": { "$value": "{theme-spacing.xl}" }
            },
            "y": { "$value": "{theme-spacing.xs}" }
          },
          "textStyle": {
            "$type": "typography",
            "$value": "{brand_typography.text-base.medium}"
          },
          "height": {
            "$type": "dimension",
            "$value": "40px"
          }
        },
        "sm": {
          "padding": {
            "x": {
              "left": { "$value": "{theme-spacing.sm}" },
              "right": { "$value": "{theme-spacing.xl}" }
            },
            "y": { "$value": "{theme-spacing.xs}" }
          },
          "textStyle": {
            "$type": "typography",
            "$value": "{brand_typography.text-sm.medium}"
          },
          "height": {
            "$type": "dimension",
            "$value": "32px"
          }
        }
      },
      
      // ADD: Typography Variants
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
          "$value": "{brand_typography.text-sm.regular}"
        }
      },
      
      // ADD: Height Tokens (if not in size variants)
      "height": {
        "default": {
          "$type": "dimension",
          "$value": "40px"
        },
        "sm": {
          "$type": "dimension",
          "$value": "32px"
        }
      },
      
      // ADD: Opacity Tokens
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
      
      // ADD: Background Hover
      "bg": {
        "hover": {
          "$type": "color",
          "$value": "{theme-colors.background.default}"
        }
      }
    }
  }
}
```

---

## 8. QUESTIONS TO RESOLVE

### 8.1 Spacing Verification Needed

1. **Input Right Padding**: Figma shows `pr-[56px]` - is this:
   - 32px padding + 24px icon space?
   - Or actual 56px padding?
   - **Action**: Verify with user or measure icon component

2. **6px Gap Token**: 
   - Current `gap.xs` = 4px
   - Needed: 6px for label and helper gaps
   - **Options**:
     a. Create new `gap.6px` token
     b. Use `theme-spacing.sm` (12px) and divide conceptually
     c. Use closest existing token

3. **Small Input Height**: 
   - Calculation: 8px + 20px + 8px = 36px
   - Figma shows 32px
   - **Action**: Verify correct height

---

## 9. UPDATED IMPLEMENTATION PRIORITY

### Phase 1: Critical Input Enhancements (Required)

1. ✅ **Keep Border Radius as 0** - Already correct, no change needed
2. ❌ **Add Asymmetric Padding** - Separate left/right padding tokens
3. ❌ **Add Gap Tokens** - Label, button, helper, icon gaps
4. ❌ **Add Size Variants** - Restructure to size.default and size.sm
5. ❌ **Add Typography Variants** - Default, sm, helper
6. ❌ **Add Height Tokens** - Default and sm heights
7. ❌ **Add Text Error** - Error state text color

### Phase 2: Important Enhancements

8. ⚠️ **Add Opacity Tokens** - Disabled and placeholder
9. ⚠️ **Add Background Hover** - Hover state background
10. ⚠️ **Add Icon Disabled** - Icon disabled color tokens

### Phase 3: Removed from Plan

~~11. Focus State Tokens~~ - **REMOVED** (handled in CSS)
~~12. Border Radius Variants~~ - **REMOVED** (using 0px only)

---

## 10. BREAKING CHANGES

### 10.1 Structural Changes

1. **Padding Restructure** (single x → object with left/right)
   - **Impact**: `component.input.padding.x` will change structure
   - **Mitigation**: Change to `component.input.padding.x.left` and `.x.right`
   - **Action**: Update all references

2. **TextStyle Restructure** (single value → object)
   - **Impact**: `component.input.textStyle` will change structure
   - **Mitigation**: Change to `component.input.textStyle.default`
   - **Action**: Update all references

3. **Add Size Variants** (flat structure → nested size object)
   - **Impact**: May require restructuring existing tokens
   - **Mitigation**: Move existing tokens into `size.default`
   - **Action**: Restructure carefully

---

## 11. VALIDATION CHECKLIST

Before implementing, verify:

- [ ] All referenced theme tokens exist
- [ ] 6px gap token decision (create new or use existing)
- [ ] Input right padding value (32px vs 56px)
- [ ] Small input height calculation (32px vs 36px)
- [ ] Border radius remains 0px (no change needed)
- [ ] No focus state tokens are created
- [ ] All new tokens follow naming conventions
- [ ] Padding structure supports asymmetric values
- [ ] Gap tokens cover all spacing contexts

---

## 12. SUMMARY OF CHANGES

### Tokens to Add: ~20-25 new tokens
### Tokens to Modify: ~3-5 existing tokens (restructure)
### Tokens to Remove: 0 (no deletions)

### Key Changes:
1. **Padding**: Restructure to support asymmetric left/right
2. **Gaps**: Add 5 gap tokens for different contexts
3. **Sizes**: Add size variant structure (default, sm)
4. **Typography**: Add typography variants (default, sm, helper)
5. **Heights**: Add calculated height tokens
6. **Error**: Add error text color
7. **Opacity**: Add disabled/placeholder opacity
8. **Hover**: Add background hover state

### Excluded (Per Master Rules):
- ❌ Focus state tokens
- ❌ Border radius variants (keeping 0px)

---

**Document Version**: 2.0 (Updated)  
**Date**: 2025  
**Status**: Ready for Review - Awaiting User Input Before Implementation

