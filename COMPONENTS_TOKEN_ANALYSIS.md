# Components Token Collection - Analysis & Required Edits

## Executive Summary

This document provides a comprehensive analysis of the `components/library` token collection in `tokens.json`, comparing existing tokens against:
1. **Rules Requirements** (from `ui_color_usage_of_grays_neturals.md`)
2. **Shadcn Input Component Requirements** (from `SHADCN_INPUT_TOKENS_REPORT.md`)
3. **Design System Best Practices** (from workspace rules)

**Status**: The components collection has a solid foundation but requires significant enhancements to fully support Shadcn components and align with the design system rules.

---

## 1. RULES-BASED REQUIREMENTS ANALYSIS

### 1.1 Disabled State Color Requirements

**Rule Source**: `ui_color_usage_of_grays_neturals.md`

**Required Token Mapping**:
| Semantic Token | Primitive Token | Current Status | Required Value |
|----------------|-----------------|----------------|----------------|
| `bg-disabled` | `neutral-warm.100` | ⚠️ Partial | `{colors.neutral-warm.100}` |
| `text-disabled` | `neutral-warm.500` | ✅ Correct | `{colors.neutral-warm.500}` |
| `border-disabled` | `neutral-warm.300` | ❌ Missing | `{colors.neutral-warm.300}` |
| `icon-disabled` | `neutral-warm.500` | ❌ Missing | `{colors.neutral-warm.500}` |

**Current Implementation Issues**:
- ✅ `component.input.bg.disabled` correctly uses `{theme-colors.background.disabled}` which maps to `neutral-warm.100`
- ✅ `component.input.text.disabled` correctly uses `{theme-colors.foreground.disabled}` which maps to `neutral-warm.500`
- ❌ `component.input.border.disabled` uses `{theme-colors.border.disabled}` which maps to `neutral-warm.300` - **VERIFY THIS IS CORRECT**
- ❌ Missing `icon-disabled` tokens across all components

**Action Required**:
1. Verify `theme-colors.border.disabled` maps to `neutral-warm.300` (should be `#DED1C3` based on current primitives)
2. Add `icon.disabled` color tokens to all interactive components

---

## 2. INPUT COMPONENT ANALYSIS

### 2.1 Current Input Token Structure

**Location**: `components/library/component/input` (lines 3787-3862)

**Existing Tokens**:
```json
{
  "bg": { "default", "disabled" },
  "border": { "default", "disabled", "error" },
  "text": { "default", "placeholder", "disabled" },
  "radius": { single value },
  "borderWidth": { single value },
  "padding": { "x", "y" },
  "textStyle": { single typography token },
  "label": { typography token }
}
```

### 2.2 Missing Tokens (Based on Shadcn Requirements)

#### **CRITICAL MISSING TOKENS**:

1. **Focus State Tokens** ❌
   - `border.focus` - Focus ring border color (should be `{theme-colors.border.info}` or `{theme-colors.info.default}`)
   - `ring.focus` - Focus ring color with opacity
   - `shadow.focus` - Focus ring shadow/outline

2. **Size Variants** ❌
   - `size.sm` - Small variant tokens (padding, textStyle, height)
   - `size.lg` - Large variant tokens (padding, textStyle, height)
   - `size.default` - Explicit default size tokens

3. **Gap Tokens** ❌
   - `gap.icon` - Gap between icon and text (8px)
   - `gap.helper` - Gap for helper text spacing (4px)

4. **Height Tokens** ❌
   - `height.default` - Calculated height (~40px)
   - `height.sm` - Small height (~32px)
   - `height.lg` - Large height (~48px)

5. **Border Width Variants** ❌
   - `borderWidth.focus` - Thicker border for focus state (2px)

6. **Border Radius Variants** ❌
   - `radius.sm` - Small variant (4px)
   - `radius.lg` - Large variant (8px)
   - Current: Only `radius.none` (0px) - **SHOULD BE `radius.md` (6px) per Shadcn**

7. **Text Color Variants** ❌
   - `text.error` - Error message text color
   - Currently missing from input (exists in other components)

8. **Background Variants** ❌
   - `bg.hover` - Hover state background

9. **Opacity Tokens** ❌
   - `opacity.disabled` - Disabled state opacity
   - `opacity.placeholder` - Placeholder text opacity (60%)

10. **Typography Variants** ❌
    - `textStyle.sm` - Small variant typography
    - `textStyle.helper` - Helper text typography (text-xs)

---

## 3. COMPONENT-BY-COMPONENT ANALYSIS

### 3.1 Button Component ✅ (Well Structured)

**Status**: Comprehensive structure with variants and sizes

**Existing Structure**:
- ✅ Base tokens (radius, borderWidth)
- ✅ Variants (default, secondary, destructive, outline, ghost, link)
- ✅ Size variants (default, sm, lg, icon)
- ✅ State tokens (hover, active, disabled) for all variants

**Minor Issues**:
- ⚠️ Missing `icon.disabled` color token
- ⚠️ Consider adding `focus` state tokens for accessibility

---

### 3.2 Input Component ⚠️ (Needs Enhancement)

**Status**: Basic structure exists but missing critical Shadcn requirements

**Existing**:
- ✅ Basic color tokens (bg, border, text)
- ✅ Padding tokens (x, y)
- ✅ Typography (textStyle, label)
- ✅ Border width and radius

**Missing** (Priority Order):
1. **HIGH**: Focus state tokens (border.focus, ring.focus, shadow.focus)
2. **HIGH**: Size variants (sm, lg) with complete token sets
3. **HIGH**: Border radius should be `md` (6px) not `none` (0px)
4. **MEDIUM**: Gap tokens (icon, helper)
5. **MEDIUM**: Height tokens (calculated values)
6. **MEDIUM**: Text error color
7. **LOW**: Opacity tokens
8. **LOW**: Background hover state

---

### 3.3 Textarea Component ✅ (Adequate)

**Status**: Properly references input tokens, minimal structure

**Existing**:
- ✅ References `component.input` tokens appropriately
- ✅ Custom padding.y (uses `md` instead of `xs`)

**Missing**:
- ⚠️ Could benefit from same enhancements as input (focus states, size variants)

---

### 3.4 Form Control Components (Checkbox, Radio, Switch) ✅

**Status**: Well-structured with root and indicator tokens

**Existing**:
- ✅ Proper nesting (root, indicator)
- ✅ State tokens (default, checked)
- ✅ Size tokens

**Minor Issues**:
- ⚠️ Missing `disabled` state tokens for indicators
- ⚠️ Missing `focus` state tokens

---

### 3.5 Label Component ✅ (Minimal but Adequate)

**Status**: Simple structure, correctly references typography

**Existing**:
- ✅ Typography token
- ✅ Color token

**Enhancement Opportunities**:
- Consider adding size variants if needed
- Consider adding `required` state styling

---

### 3.6 Badge Component ✅ (Well Structured)

**Status**: Comprehensive with variants

**Existing**:
- ✅ Base tokens (radius, borderWidth, padding, textStyle)
- ✅ Variants (default, secondary, destructive, outline)

**Minor Issues**:
- ⚠️ Missing size variants (sm, lg) if needed
- ⚠️ Missing `disabled` state

---

### 3.7 Card Component ✅ (Adequate)

**Status**: Simple but complete

**Existing**:
- ✅ All essential tokens (bg, border, borderWidth, radius, padding, text)

**Enhancement Opportunities**:
- Consider adding variant tokens (elevated, outlined, etc.)

---

### 3.8 Menu/Dropdown Components ✅ (Well Structured)

**Status**: Comprehensive with base pattern and specific implementations

**Existing**:
- ✅ `menuBase` pattern with content, item, separator, label
- ✅ `dropdownMenu` references menuBase appropriately
- ✅ `select` component structure
- ✅ `menubar` component structure

**Minor Issues**:
- ⚠️ Missing `focus` state tokens for menu items
- ⚠️ Missing `disabled` state for menu items

---

### 3.9 Dialog/Popover Components ✅ (Adequate)

**Status**: Basic structure exists

**Existing**:
- ✅ Essential tokens (bg, border, radius, padding, shadow)

**Enhancement Opportunities**:
- Consider adding size variants
- Consider adding animation tokens

---

### 3.10 Tabs Component ✅ (Well Structured)

**Status**: Comprehensive with list, trigger, and content tokens

**Existing**:
- ✅ List tokens (bg, radius, padding)
- ✅ Trigger tokens (bg, text with default/active states)
- ✅ Content tokens (border, radius, padding)

**Minor Issues**:
- ⚠️ Missing `disabled` state for triggers
- ⚠️ Missing `focus` state

---

### 3.11 Accordion Component ✅ (Adequate)

**Status**: Basic structure with item, trigger, content

**Existing**:
- ✅ Essential tokens for all parts

**Enhancement Opportunities**:
- Consider adding `disabled` state
- Consider adding `focus` state

---

### 3.12 Separator Component ✅ (Minimal but Complete)

**Status**: Simple structure, adequate for needs

**Existing**:
- ✅ Color and size tokens

---

### 3.13 Avatar Component ✅ (Adequate)

**Status**: Basic structure with root and fallback

**Existing**:
- ✅ Root tokens (radius, overflow)
- ✅ Fallback tokens (bg, text)

**Enhancement Opportunities**:
- Consider adding size variants

---

## 4. DETAILED TOKEN ADDITIONS REQUIRED

### 4.1 Input Component - Complete Token Structure Needed

**Priority: HIGH - Required for Shadcn Implementation**

```json
{
  "component": {
    "input": {
      // EXISTING - Keep as is
      "bg": { "default", "disabled" },
      "border": { "default", "disabled", "error" },
      "text": { "default", "placeholder", "disabled" },
      "radius": { current },
      "borderWidth": { current },
      "padding": { "x", "y" },
      "textStyle": { current },
      "label": { current },
      
      // ADD: Focus States
      "border": {
        "focus": {
          "$type": "color",
          "$value": "{theme-colors.border.info}"
        }
      },
      "ring": {
        "focus": {
          "$type": "color",
          "$value": "{theme-colors.info.default}"
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
          }
        }
      },
      
      // ADD: Size Variants
      "size": {
        "default": {
          "padding": {
            "x": { "$value": "{theme-spacing.md}" },
            "y": { "$value": "{theme-spacing.xs}" }
          },
          "textStyle": { "$value": "{brand_typography.text-base.medium}" },
          "height": { "$value": "40px" }
        },
        "sm": {
          "padding": {
            "x": { "$value": "{theme-spacing.sm}" },
            "y": { "$value": "{theme-spacing.xs}" }
          },
          "textStyle": { "$value": "{brand_typography.text-sm.medium}" },
          "height": { "$value": "32px" }
        },
        "lg": {
          "padding": {
            "x": { "$value": "{theme-spacing.lg}" },
            "y": { "$value": "{theme-spacing.sm}" }
          },
          "textStyle": { "$value": "{brand_typography.text-lg.medium}" },
          "height": { "$value": "48px" }
        }
      },
      
      // ADD: Gap Tokens
      "gap": {
        "icon": {
          "$type": "dimension",
          "$value": "{theme-spacing.gap.sm}"
        },
        "helper": {
          "$type": "dimension",
          "$value": "{theme-spacing.gap.xs}"
        }
      },
      
      // ADD: Border Width Focus
      "borderWidth": {
        "default": { "$value": "{theme-spacing.border-width.default}" },
        "focus": {
          "$type": "dimension",
          "$value": "{theme-spacing.border-width.sm}"
        }
      },
      
      // ADD: Border Radius Variants
      "radius": {
        "default": {
          "$type": "dimension",
          "$value": "{theme-spacing.radius.md}"
        },
        "sm": {
          "$type": "dimension",
          "$value": "{theme-spacing.radius.sm}"
        },
        "lg": {
          "$type": "dimension",
          "$value": "{theme-spacing.radius.lg}"
        }
      },
      
      // ADD: Text Error
      "text": {
        "error": {
          "$type": "color",
          "$value": "{theme-colors.foreground.error}"
        }
      },
      
      // ADD: Background Hover
      "bg": {
        "hover": {
          "$type": "color",
          "$value": "{theme-colors.background.default}"
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
      
      // ADD: Typography Variants
      "textStyle": {
        "default": { "$value": "{brand_typography.text-base.medium}" },
        "sm": {
          "$type": "typography",
          "$value": "{brand_typography.text-sm.medium}"
        },
        "helper": {
          "$type": "typography",
          "$value": "{brand_typography.text-xs.regular}"
        }
      }
    }
  }
}
```

---

### 4.2 Cross-Component Enhancements

**Priority: MEDIUM - Improves consistency and accessibility**

#### A. Add Focus States to All Interactive Components
- Button: `border.focus`, `ring.focus`
- Checkbox: `root.focus` border
- Radio: `root.focus` border
- Switch: `root.focus` border
- Select: `trigger.focus` border
- Tabs: `trigger.focus` border
- Accordion: `trigger.focus` border

#### B. Add Disabled States Where Missing
- Badge: `bg.disabled`, `text.disabled`
- Tabs: `trigger.disabled`
- Accordion: `trigger.disabled`
- Menu items: `bg.disabled`, `text.disabled`

#### C. Add Icon Disabled Tokens
- Button: `icon.disabled` color
- Input: `icon.disabled` color (if icon variant exists)
- All components with icons

---

## 5. THEME COLOR TOKEN VERIFICATION

### 5.1 Required Theme Color Mappings

**Verify these theme color tokens exist and map correctly**:

| Theme Token | Should Map To | Current Status | Notes |
|-------------|--------------|----------------|-------|
| `theme-colors.border.disabled` | `neutral-warm.300` | ⚠️ Verify | Should be `#DED1C3` |
| `theme-colors.border.info` | `blue.700` | ✅ Exists | Currently `{colors.blue.700}` |
| `theme-colors.foreground.error` | `red.50` | ⚠️ Verify | Currently `{colors.red.50}` - **CHECK IF CORRECT** |
| `theme-colors.info.default` | `blue.500` | ✅ Exists | Currently `{colors.blue.500}` |
| `theme-colors.info.hover` | `blue.600` | ✅ Exists | Currently `{colors.blue.600}` |

**Action Required**:
1. Verify `theme-colors.foreground.error` - `red.50` might be too light for text. Consider `red.400` or `red.500` for better contrast.
2. Verify `theme-colors.border.disabled` maps to `neutral-warm.300` as per rules.

---

## 6. STRUCTURAL ISSUES

### 6.1 Input Radius Issue

**Current**: `component.input.radius` = `{theme-spacing.radius.none}` (0px)

**Should Be**: `{theme-spacing.radius.md}` (6px) per Shadcn standards

**Impact**: Inputs will appear square instead of rounded, not matching Shadcn default behavior.

**Action**: Change input radius from `none` to `md`.

---

### 6.2 Missing Size Variant Structure

**Current**: Input has flat structure with single padding/textStyle values

**Should Be**: Nested `size` object with `default`, `sm`, `lg` variants (like button component)

**Impact**: Cannot create size variants in Figma or Tailwind without this structure.

**Action**: Restructure input tokens to match button's size variant pattern.

---

### 6.3 Inconsistent Border Width Structure

**Current**: `borderWidth` is a single value

**Should Be**: Object with `default` and `focus` variants

**Impact**: Cannot apply different border widths for focus states.

**Action**: Restructure to `borderWidth.default` and `borderWidth.focus`.

---

## 7. SUMMARY OF REQUIRED EDITS

### 7.1 Critical Edits (Must Have)

1. **Input Component - Focus States** ❌
   - Add `border.focus` → `{theme-colors.border.info}`
   - Add `ring.focus` → `{theme-colors.info.default}`
   - Add `shadow.focus` → Custom boxShadow with blue color

2. **Input Component - Border Radius** ❌
   - Change from `radius.none` (0px) to `radius.md` (6px)
   - Add `radius.sm` and `radius.lg` variants

3. **Input Component - Size Variants** ❌
   - Restructure to include `size.default`, `size.sm`, `size.lg`
   - Each size needs: padding, textStyle, height

4. **Input Component - Border Width Focus** ❌
   - Restructure `borderWidth` to object
   - Add `borderWidth.focus` → `{theme-spacing.border-width.sm}`

5. **Input Component - Gap Tokens** ❌
   - Add `gap.icon` → `{theme-spacing.gap.sm}`
   - Add `gap.helper` → `{theme-spacing.gap.xs}`

6. **Input Component - Height Tokens** ❌
   - Add `height.default` → `40px`
   - Add `height.sm` → `32px`
   - Add `height.lg` → `48px`

7. **Input Component - Text Error** ❌
   - Add `text.error` → `{theme-colors.foreground.error}`

8. **Input Component - Typography Variants** ❌
   - Restructure `textStyle` to object
   - Add `textStyle.sm` → `{brand_typography.text-sm.medium}`
   - Add `textStyle.helper` → `{brand_typography.text-xs.regular}`

---

### 7.2 Important Edits (Should Have)

9. **Input Component - Opacity Tokens** ⚠️
   - Add `opacity.disabled` → `{opacity.disabled}`
   - Add `opacity.placeholder` → `60%`

10. **Input Component - Background Hover** ⚠️
    - Add `bg.hover` → `{theme-colors.background.default}`

11. **All Components - Icon Disabled** ⚠️
    - Add `icon.disabled` color tokens to button, input (if applicable)

12. **All Interactive Components - Focus States** ⚠️
    - Add focus border/ring tokens to checkbox, radio, switch, select, tabs, accordion

---

### 7.3 Nice-to-Have Edits (Consider)

13. **Textarea - Size Variants** 💡
    - Consider adding size variants matching input

14. **Badge - Size Variants** 💡
    - Consider adding sm/lg variants if needed

15. **Card - Variants** 💡
    - Consider adding elevated, outlined variants

16. **Menu Items - Disabled States** 💡
    - Add disabled state tokens

---

## 8. TOKEN REFERENCE VERIFICATION

### 8.1 Verify These Theme Tokens Exist

Before making edits, verify these theme tokens are correctly defined:

- ✅ `theme-colors.background.default` → `{colors.white}`
- ✅ `theme-colors.background.disabled` → `{colors.neutral-warm.100}`
- ⚠️ `theme-colors.border.disabled` → Should be `{colors.neutral-warm.300}` (verify)
- ✅ `theme-colors.border.subtle` → `{colors.neutral-warm.200}`
- ✅ `theme-colors.border.info` → `{colors.blue.700}`
- ✅ `theme-colors.foreground.default` → `{colors.black}`
- ✅ `theme-colors.foreground.placeholder` → `{colors.neutral-warm.600}`
- ✅ `theme-colors.foreground.disabled` → `{colors.neutral-warm.500}`
- ⚠️ `theme-colors.foreground.error` → `{colors.red.50}` (verify contrast)
- ✅ `theme-colors.danger.default` → `{colors.red.400}`
- ✅ `theme-colors.info.default` → `{colors.blue.500}`
- ✅ `theme-colors.info.hover` → `{colors.blue.600}`

---

## 9. IMPLEMENTATION PRIORITY

### Phase 1: Critical Input Enhancements (Required for Shadcn)
1. Fix input radius (none → md)
2. Add focus states (border, ring, shadow)
3. Add size variants structure
4. Add border width focus variant
5. Add gap tokens
6. Add height tokens
7. Add text error color
8. Add typography variants

### Phase 2: Accessibility & Consistency
9. Add opacity tokens
10. Add background hover
11. Add focus states to all interactive components
12. Add icon disabled tokens

### Phase 3: Polish & Enhancement
13. Add disabled states where missing
14. Consider size variants for other components
15. Add component variants where beneficial

---

## 10. BREAKING CHANGES CONSIDERATIONS

### 10.1 Potential Breaking Changes

1. **Input Radius Change** (none → md)
   - **Impact**: All existing inputs will change from square to rounded
   - **Mitigation**: This aligns with Shadcn defaults, likely desired change
   - **Action**: Document change, update Figma components

2. **Input Border Width Restructure** (single value → object)
   - **Impact**: References to `component.input.borderWidth` will break
   - **Mitigation**: Change to `component.input.borderWidth.default`
   - **Action**: Update all references in code/Figma

3. **Input TextStyle Restructure** (single value → object)
   - **Impact**: References to `component.input.textStyle` will break
   - **Mitigation**: Change to `component.input.textStyle.default`
   - **Action**: Update all references

---

## 11. VALIDATION CHECKLIST

Before implementing, verify:

- [ ] All referenced theme tokens exist in `theme/color-light`
- [ ] All referenced spacing tokens exist in `theme/theme-spacing`
- [ ] All referenced typography tokens exist in `theme/typography`
- [ ] Border disabled color matches rules (`neutral-warm.300`)
- [ ] Foreground error color has sufficient contrast
- [ ] Height calculations are correct (padding × 2 + line-height)
- [ ] Focus ring shadow opacity is accessible (WCAG 2.1 AA)
- [ ] All new tokens follow existing naming conventions
- [ ] No duplicate token names are created

---

## 12. ESTIMATED TOKEN COUNT

### Current Input Tokens: ~10 tokens
### Required Input Tokens: ~35-40 tokens

**New Tokens to Add**: ~25-30 tokens

**Total Component Tokens After Enhancement**: ~200+ tokens (currently ~150)

---

## 13. NOTES & CONSIDERATIONS

1. **Shadcn Compatibility**: The input component structure should match Shadcn's expected token structure for seamless integration.

2. **Figma Application**: Ensure all new tokens can be properly applied in Figma via Tokens Studio plugin.

3. **Tailwind Mapping**: Consider how these tokens will map to Tailwind utilities in `tailwind.config.js`.

4. **Backward Compatibility**: Some structural changes may break existing references - document and update accordingly.

5. **Testing**: After implementation, test in:
   - Tokens Studio plugin
   - Figma component library
   - Tailwind CSS output
   - Actual component implementation

---

**Document Version**: 1.0  
**Date**: 2025  
**Status**: Research & Analysis Complete - Ready for Implementation Planning

