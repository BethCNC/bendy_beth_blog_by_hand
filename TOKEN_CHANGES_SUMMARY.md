# Token Changes Summary - Components Collection

## Master Rules Applied ✅

1. **Focus States**: Handled in CSS only - NO focus state tokens needed
2. **Border Radius**: Input uses `radius.none` (0px) - square corners - **ALREADY CORRECT**
3. **Token Architecture**: Component tokens reference theme tokens

**Reference**: `.cursor/rules/DESIGN_SYSTEM_MASTER_RULES.md`

---

## Figma Design Analysis

**Source**: Shadcn UI Design System Figma Components

### Measured Spacing Values:

| Context | Value | Current Token | Status |
|---------|-------|---------------|--------|
| Label to Input (vertical) | 6px | ❌ Missing | Need `gap.label` |
| Label to Input (horizontal) | 16px | ❌ Missing | Need `gap.label-horizontal` |
| Input to Button | 8px | ❌ Missing | Need `gap.button` |
| Input to Helper Text | 6px | ❌ Missing | Need `gap.helper` |
| Icon to Text (inside input) | 8px | ❌ Missing | Need `gap.icon` |
| Input Padding Left | 12px | ✅ `theme-spacing.sm` | Exists |
| Input Padding Right | 56px* | ⚠️ Needs verification | May need separate token |
| Input Padding Vertical | 8px | ✅ `theme-spacing.xs` | Exists |

*Note: 56px right padding likely includes icon space (32px padding + 24px icon). Needs verification.

---

## Required Token Additions - Input Component

### 1. Gap Tokens (5 new tokens) ❌

```json
"gap": {
  "label": "6px",                    // Label to input (vertical)
  "label-horizontal": "16px",        // Label to input (horizontal layout)
  "button": "8px",                    // Input to button
  "helper": "6px",                    // Input to helper text
  "icon": "8px"                       // Icon to text inside input
}
```

**Issue**: 6px gap doesn't match existing gap tokens:
- `gap.xs` = 4px (dimensions.fixed.1)
- `gap.sm` = 8px (dimensions.fixed.2)
- **No 6px dimension exists**

**Options**:
1. Create new `dimensions.fixed.6px` = 0.375rem, then `gap.6px` token
2. Use closest: `gap.xs` (4px) or `gap.sm` (8px)
3. Create component-specific gap token: `component.input.gap.label` = "6px" (hardcoded)

---

### 2. Padding - Asymmetric Structure ❌

**Current**: Single `padding.x` = 16px

**Required**: Separate left/right padding

```json
"padding": {
  "x": {
    "left": "12px",     // theme-spacing.sm
    "right": "32px"     // theme-spacing.xl (verify if 56px needed)
  },
  "y": "8px"            // theme-spacing.xs
}
```

**Question**: Figma shows `pr-[56px]` - is this:
- 32px padding + 24px icon space?
- Or actual 56px padding?

---

### 3. Size Variants Structure ❌

**Current**: Flat structure with single padding/textStyle

**Required**: Nested size object (like button component)

```json
"size": {
  "default": {
    "padding": { "x": {...}, "y": "8px" },
    "textStyle": "{brand_typography.text-base.medium}",
    "height": "40px"
  },
  "sm": {
    "padding": { "x": {...}, "y": "8px" },
    "textStyle": "{brand_typography.text-sm.medium}",
    "height": "32px"
  }
}
```

---

### 4. Typography Variants ❌

**Current**: Single `textStyle` token

**Required**: Multiple typography variants

```json
"textStyle": {
  "default": "{brand_typography.text-base.medium}",
  "sm": "{brand_typography.text-sm.medium}",
  "helper": "{brand_typography.text-sm.regular}"
}
```

---

### 5. Height Tokens ❌

**Current**: No height tokens

**Required**: Calculated height for each size

```json
"height": {
  "default": "40px",    // 8px + 24px + 8px
  "sm": "32px"          // Verify: 8px + 20px + 8px = 36px?
}
```

---

### 6. Text Error Color ❌

**Current**: Missing

**Required**: 
```json
"text": {
  "error": "{theme-colors.foreground.error}"
}
```

---

### 7. Opacity Tokens ⚠️

**Optional but Recommended**:
```json
"opacity": {
  "disabled": "{opacity.disabled}",
  "placeholder": "60%"
}
```

---

### 8. Background Hover ⚠️

**Optional**:
```json
"bg": {
  "hover": "{theme-colors.background.default}"
}
```

---

## Removed from Requirements

### ❌ Focus State Tokens
- **Reason**: Handled in CSS only per master rules
- **Action**: Do not create `border.focus`, `ring.focus`, `shadow.focus`

### ❌ Border Radius Variants
- **Reason**: User requirement is 0px (square corners)
- **Current**: Already correct at `radius.none`
- **Action**: No changes needed

---

## Questions to Resolve

1. **6px Gap Token**: 
   - Current options: `gap.xs` (4px) or `gap.sm` (8px)
   - Needed: 6px (for label and helper gaps)
   - **Decision needed**: 
     a. Create new `dimensions.fixed.6px` (0.375rem) + `gap.6px` token
     b. Use `gap.sm` (8px) - closest match
     c. Hardcode "6px" in component-specific gap tokens

2. **Input Right Padding**: 
   - Figma shows: `pr-[56px]` (56px)
   - Available dimensions:
     - `dimensions.fixed.8` = 32px (2rem)
     - `dimensions.fixed.14` = 56px (3.5rem) ✅ Exact match
   - **Decision needed**: 
     a. Use `dimensions.fixed.14` (56px) directly?
     b. Or split: 32px padding + 24px icon space?
     c. Create separate `padding.x.icon` token for icon space?

3. **Small Input Height**: 
   - Calculation: 8px (top) + 20px (line-height) + 8px (bottom) = 36px
   - Figma shows: 32px
   - Available: `dimensions.fixed.8` = 32px
   - **Decision needed**: Which is correct? 32px or 36px?

---

## Implementation Summary

### Tokens to Add: ~20-25 tokens
### Tokens to Restructure: 3-5 tokens
### Breaking Changes: 2-3 structural changes

### Priority:
1. **HIGH**: Gap tokens, asymmetric padding, size variants
2. **MEDIUM**: Typography variants, height tokens, error color
3. **LOW**: Opacity tokens, hover state

---

**Status**: Ready for Review  
**Awaiting**: User input on questions above before implementation

