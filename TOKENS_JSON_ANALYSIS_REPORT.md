# Design Tokens System - Comprehensive Analysis Report

**Generated:** 2024  
**File:** `tokens.json`  
**Total Lines:** 5,477  
**Structure Type:** Tokens Studio (W3C Design Tokens Format)

---

## Executive Summary

This design token system is a comprehensive, multi-layered architecture built using Tokens Studio's W3C Design Tokens format. The system follows a hierarchical structure from primitive values through semantic tokens to component-specific tokens, enabling theme switching, design system scalability, and seamless design-to-development handoff.

**Key Statistics:**
- **14 Token Sets** organized hierarchically
- **3 Active Themes** (always-on, text-scale, default)
- **Component Library** with 15+ component definitions
- **2 Typeface Systems** (DM Sans, Behind The Nineties)
- **Comprehensive Color System** with multiple palettes
- **Full Typography Scale** with absolute and relative line heights

---

## 1. Token Set Architecture

### 1.1 Token Set Hierarchy

The system follows a three-tier architecture:

```
┌─────────────────────────────────────┐
│   PRIMITIVES (Foundation Layer)     │
│   - Raw values, no context          │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│   THEME (Semantic Layer)            │
│   - Contextual meaning              │
│   - Light/Dark mode support         │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│   COMPONENTS (Application Layer)    │
│   - Component-specific tokens        │
└─────────────────────────────────────┘
```

### 1.2 Token Set Organization

The system contains **14 token sets** organized in the following order:

1. **`typeface/dm-sans`** - DM Sans font family system
2. **`typeface/behind-the-nineties`** - Serif font family system
3. **`primitives/colors`** - Color palettes and effects
4. **`primitives/opacity`** - Opacity scale (0-100%)
5. **`primitives/dimensions`** - Spacing, sizing, border radius, screens
6. **`primitives/font-styling`** - Font weights, families, text transforms
7. **`primitives/text-dimensions-tailwind`** - Tailwind-compatible text sizes
8. **`primitives/text-dimension-scale`** - Custom text scale with absolute line heights
9. **`theme/typography`** - Brand typography system
10. **`theme/theme-spacing`** - Semantic spacing tokens
11. **`theme/color-light`** - Light theme color tokens
12. **`theme/opacity-light`** - Light theme opacity tokens
13. **`theme/color-dark`** - Dark theme color tokens
14. **`theme/opacity-dark`** - Dark theme opacity tokens
15. **`components/library`** - Component-specific tokens

---

## 2. Primitives Layer

### 2.1 Typeface Systems

#### DM Sans (Primary Sans-Serif)
- **Font Family:** `"DM Sans"`
- **Font Weights:** 11 variants
  - Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black
  - Medium Italic, Italic, Light Italic
- **Typography Tokens:** 9 weight-based typography tokens (black, extrabold, bold, semibold, medium, normal, light, extralight, thin)
- **Special Features:** Italic variants for medium, normal, and light weights

#### Behind The Nineties (Serif)
- **Font Family:** `"Behind The Nineties"`
- **Font Weights:** 4 variants
  - Regular, Medium, Semibold, Bold
- **Usage:** Applied to large display text (text-6xl, text-7xl, text-8xl)

### 2.2 Color System

#### Base Colors
- **White:** `#fcf9f4` (warm white)
- **Black:** `#0f1216` (near black)
- **Transparent:** `rgba(252,249,244,0)`

#### Neutral Palettes
Three neutral palettes with 11-step scales (50-950):

1. **Neutral Warm** (`neutral-warm`)
   - Range: `#FCFAF6` (50) to `#110202` (950)
   - Warm undertones for backgrounds and surfaces

2. **Neutral** (`neutral`)
   - Range: `#F7F7F7` (50) to `#141414` (950)
   - True neutral grays

3. **Neutral Cool** (`neutral-cool`)
   - Range: `#F5F5F6` (50) to `#121316` (950)
   - Cool undertones for text and borders

#### Brand Colors
Four brand color palettes with 11-step scales:

1. **Brand Yellow** (`brand-yellow`)
   - Primary brand color
   - Range: `#FFFEF2` (50) to `#2B2912` (950)
   - Default: `#FCF687` (500)

2. **Brand Blue** (`brand-blue`)
   - Secondary brand color
   - Range: `#F3FAFF` (50) to `#132433` (950)
   - Default: `#A8D7FB` (500)

3. **Brand Pink** (`brand-pink`)
   - Range: `#FFF5FA` (50) to `#2E1725` (950)
   - Default: `#FDAAD8` (500)

4. **Brand Orange** (`brand-orange`)
   - Range: `#FFF4F1` (50) to `#2B110D` (950)
   - Default: `#FF8566` (500)

#### Semantic Colors
Standard semantic color palettes:

- **Red:** Error/danger states (11-step scale)
- **Yellow:** Warning states (11-step scale)
- **Green:** Success states (11-step scale)
- **Blue:** Info states (11-step scale)

#### Shadow System
- **Location:** `primitives/colors/tw_effects/shadow`
- **Shadows:** sm, base, md, default, lg, xl, 2xl, inner
- **Format:** BoxShadow tokens with color, type, x, y, blur, spread
- **Multi-layer shadows:** base, md, default, lg, xl use arrays for multiple shadow layers

### 2.3 Opacity System

**Location:** `primitives/opacity/opacity`

**Scale:** 0% to 100% in increments:
- 0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100

**Token Type:** `$type: "opacity"`

### 2.4 Dimensions System

**Location:** `primitives/dimensions/dimensions`

#### Fixed Dimensions
- **Range:** 0 to 100 (0px to 400px)
- **Unit:** rem-based with px descriptions
- **Pattern:** `dimensions.fixed.{number}`
- **Examples:**
  - `fixed.0` = `0px`
  - `fixed.1` = `0.25rem` (4px)
  - `fixed.4` = `1rem` (16px)
  - `fixed.10` = `2.5rem` (40px)
  - `fixed.100` = `25rem` (400px)
- **Special:** `fixed.px` = `1px`

**Note:** The system includes a note explaining that fixed dimensions can be applied to padding, margin, gap, width, and height properties, as Tailwind uses consistent values across these properties.

#### Border Radius
- **Tokens:** rounded-none, rounded-sm, rounded-default, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-full
- **Range:** `0rem` to `9999px` (full)
- **Default:** `0.25rem` (4px)

#### Border Width
- **Tokens:** 0, default (1px), 2, 4, 8
- **Default:** `1px`

#### Screen Breakpoints
- **2xs:** `320px` (mobile)
- **xs:** `376px` (mobile)
- **sm:** `640px` (tablet)
- **md:** `768px`
- **lg:** `1024px` (laptop)
- **xl:** `1280px` (desktop)
- **2xl:** `1536px` (extra wide)

#### Outline System
- **Outline Width:** 0, 1, 2, 4, 8px
- **Outline Offset:** 0, 1, 2, 4, 8px
- **Purpose:** Focus rings and accessibility

### 2.5 Font Styling System

**Location:** `primitives/font-styling`

#### Font Weights
Organized by font family:

**Sans (DM Sans):**
- font-thin-100, font-extralight-200, font-light-300, font-normal-400, font-medium-500, font-semibold-600, font-bold-700, font-extrabold-800, font-black-900

**Serif (Behind The Nineties):**
- font-normal-400, font-medium-500, font-semibold-600, font-bold-700

**Note:** Numeric values included in token names to match Tailwind's font-weight classes.

#### Font Families
- `font-sans`: References `{fontFamilies.dm-sans}`
- `font-serif`: References `{fontFamilies.behind-the-nineties}`

#### Text Transform
- `normal-case`: "none"
- `uppercase`: "uppercase"
- `lowercase`: "lowercase"
- `capitalize`: "capitalize" (Title case in Figma)

#### Text Decoration
- `none`: "none"
- `underline`: "underline"
- `line-through`: "line-through"

### 2.6 Text Dimensions

#### Tailwind-Compatible Scale
**Location:** `primitives/text-dimensions-tailwind`

**Font Sizes:**
- text-xs (0.75rem / 12px)
- text-sm (0.875rem / 14px)
- text-base (1rem / 16px) - Smallest body size
- text-lg (1.125rem / 18px)
- text-xl (1.25rem / 20px)
- text-2xl (1.5rem / 24px)
- text-3xl (1.875rem / 30px)
- text-4xl (2.25rem / 36px)
- text-5xl (3rem / 48px)
- text-6xl (3.75rem / 60px)
- text-7xl (4.5rem / 72px)
- text-8xl (6rem / 96px)
- text-9xl (8rem / 128px)

**Letter Spacing:**
- tracking-tighter: -4% (-0.5em)
- tracking-tight: -2% (-0.025em)
- tracking-normal: 0% (0em)
- tracking-wide: 4% (0.025em)

**Relative Line Heights:**
- leading-none: 100% (1.0)
- leading-tight: 125% (1.25)
- leading-snug: 138% (1.375)
- leading-normal: 150% (1.5)
- leading-relaxed: 163% (1.625)
- leading-loose: 200% (2.0)

#### Custom Text Scale
**Location:** `primitives/text-dimension-scale`

**Font Sizes:** Custom scale with 1.2 multiplier, rounded to 4px grid:
- text-sm: 0.75rem (12px)
- text-base: 1rem (16px)
- text-lg: 1.25rem (20px)
- text-xl: 1.5rem (24px)
- text-2xl: 2rem (32px)
- text-3xl: 2.5rem (36px)
- text-4xl: 3rem (48px)
- text-5xl: 3.5rem (56px)
- text-6xl: 4.5rem (72px)
- text-7xl: 5.5rem (88px)
- text-8xl: 6.75rem (108px)

**Absolute Line Heights:** Calculated per font size, rounded to 4px grid:
- Paired with specific font sizes
- Examples: text-base.leading-normal = 1.5rem (24px), text-4xl.leading-tight = 3.75rem (60px)

---

## 3. Theme Layer

### 3.1 Typography Theme

**Location:** `theme/typography/brand_typography`

**Structure:** Typography tokens organized by size and weight variant.

#### Display Sizes (No variants)
- `text-xl`: Semibold, leading-tight
- `text-2xl`: Bold, leading-tight
- `text-3xl`: Bold, leading-tight
- `text-4xl`: Bold, leading-tight
- `text-5xl`: Semibold, tracking-tight, leading-tight
- `text-6xl`: Serif, Regular, leading-tight
- `text-7xl`: Serif, Regular, leading-tight
- `text-8xl`: Serif, Regular, leading-tight

#### Body Sizes (Multiple variants)
Each size has variants: `light`, `default`, `medium`, `semibold`, `bold`, `underline`

- **text-sm:** 0.75rem (12px), leading-normal
- **text-base:** 1rem (16px), leading-normal
- **text-lg:** 1.25rem (20px), leading-normal (or leading-snug for medium)

**Font Family:** All use DM Sans (sans) except display sizes 6xl-8xl which use Behind The Nineties (serif).

### 3.2 Theme Spacing

**Location:** `theme/theme-spacing/theme-spacing`

#### Spacing Scale
- `2xs`: 4px (fixed.1)
- `xs`: 8px (fixed.2)
- `sm`: 12px (fixed.3)
- `md`: 16px (fixed.4)
- `lg`: 24px (fixed.6)
- `xl`: 32px (fixed.8)
- `2xl`: 48px (fixed.12)
- `3xl`: 64px (fixed.16)
- `4xl`: 96px (fixed.24)

#### Section Spacing
- `section-sm`: 64px
- `section-lg`: 128px

#### Gap System
- `gap.none`: 0px
- `gap.xs`: 4px (tight clusters)
- `gap.sm`: 8px (standard)
- `gap.md`: 16px (sections)
- `gap.lg`: 24px (large)

#### Radius System
- `radius.none`: 0px
- `radius.xs`: 2px (subtle)
- `radius.sm`: 4px (standard small)
- `radius.md`: 6px (standard interactive)
- `radius.lg`: 8px (container)
- `radius.xl`: 12px (large section)
- `radius.full`: 9999px (pill/circle)

#### Border Width
- `border-width.none`: 0px
- `border-width.default`: 1px
- `border-width.sm`: 2px
- `border-width.md`: 4px
- `border-width.lg`: 8px

#### Button Height
- `button-height.sm`: 36px (h-9)
- `button-height.default`: 40px (h-10)
- `button-height.lg`: 44px (h-11)
- `button-height.icon-sm`: 32px (size-8)
- `button-height.icon`: 40px (h-10 w-10)
- `button-height.icon-lg`: 40px (size-10)

**Note:** Button heights match Shadcn UI sizing conventions.

### 3.3 Color Themes

#### Light Theme
**Location:** `theme/color-light/theme-colors`

**Background:**
- `default`: White
- `hover`: Neutral warm 50
- `active`: Neutral warm 100
- `emphasis`: Neutral cool 100
- `inverse`: Neutral cool 950
- `inverse-hover`: Neutral cool 900
- `inverse-active`: Neutral cool 800
- `disabled`: Neutral 100
- `info`: Blue 100
- `canvas`: Neutral warm 50
- `raised`: White
- `transparent`: Transparent

**Foreground:**
- `default`: Neutral cool 900
- `primary`: Neutral cool 900
- `secondary`: Neutral cool 700
- `tertiary`: Neutral cool 600
- `placeholder`: Neutral cool 400
- `disabled`: Neutral cool 300
- `negative`: White
- `error`: Red 600
- `info`: Blue 700

**Primary (Brand Yellow):**
- `default`: Brand yellow 500
- `hover`: Brand yellow 600
- `active`: Brand yellow 700
- `subtle`: Brand yellow 100

**Secondary (Brand Blue):**
- `default`: Brand blue 500
- `hover`: Brand blue 600
- `active`: Brand blue 700

**Semantic Colors:**
- Success: Green 400/500/600
- Warning: Yellow 400/600
- Danger: Red 400/500/600
- Info: Blue 500/600/700

**Border:**
- `default`: Neutral cool 300
- `hover`: Neutral cool 400
- `active`: Neutral cool 500
- `subtle`: Neutral cool 200
- `disabled`: Neutral cool 300
- `negative`: White
- `transparent`: Transparent
- `info`: Blue 700

**Text:**
- `primary`: Neutral cool 900
- `secondary`: Neutral cool 700
- `tertiary`: Neutral cool 600
- `placeholder`: Neutral cool 500
- `disabled`: Neutral cool 400
- `inverse`: White

**Surface:**
- `canvas`: Neutral warm 50
- `subtle`: Neutral warm 100
- `default`: White
- `raised`: White
- `disabled`: Neutral 100

**Icon:**
- `default`: Neutral cool 900
- `muted`: Neutral cool 600
- `disabled`: Neutral cool 400
- `inverse`: White

#### Dark Theme
**Location:** `theme/color-dark/theme-colors`

**Background:**
- `default`: Neutral cool 950
- `emphasis`: Neutral 900
- `active`: Neutral warm 800
- `inverse`: White
- `transparent`: Transparent
- `disabled`: Neutral cool 800
- `canvas`: Neutral cool 950
- `raised`: Neutral cool 800

**Foreground:**
- `default`: White
- `muted`: Neutral cool 300
- `placeholder`: Neutral cool 500
- `negative`: Black
- `disabled`: Neutral cool 600
- `error`: Red 400
- `info`: Blue 300
- `primary`: White
- `secondary`: Neutral cool 300
- `tertiary`: Neutral cool 400
- `inverse`: Black

**Primary (Brand Yellow):**
- `default`: Brand yellow 400 (lighter for dark mode)
- `hover`: Brand yellow 300
- `active`: Brand yellow 200
- `subtle`: Brand yellow 900

**Secondary (Brand Blue):**
- `default`: Brand blue 400
- `hover`: Brand blue 300
- `active`: Brand blue 200

**Semantic Colors:**
- Success: Green 400/300
- Warning: Yellow 400/300
- Danger: Red 400/300
- Info: Blue 400/300

**Border:**
- `default`: Neutral cool 600
- `subtle`: Neutral cool 700
- `active`: Neutral cool 500
- `disabled`: Neutral cool 600
- `strong`: Neutral cool 500
- `negative`: Black
- `transparent`: Transparent
- `info`: Blue 300

**Text:**
- `primary`: White
- `secondary`: Neutral cool 300
- `tertiary`: Neutral cool 400
- `placeholder`: Neutral cool 500
- `disabled`: Neutral cool 600
- `inverse`: Black

**Surface:**
- `canvas`: Neutral cool 950
- `subtle`: Neutral warm 900
- `default`: Neutral cool 950
- `raised`: Neutral cool 800
- `disabled`: Neutral cool 800

**Icon:**
- `default`: White
- `muted`: Neutral cool 400
- `disabled`: Neutral cool 600
- `inverse`: Black

### 3.4 Opacity Themes

#### Light Theme Opacity
**Location:** `theme/opacity-light/opacity`

- `disabled`: 50%
- `muted`: 40%
- `subtle`: 20%
- `overlay`: 80%
- `backdrop`: 50%
- `hover`: 10%
- `active`: 20%
- `border`: 30%
- `textMuted`: 60%

#### Dark Theme Opacity
**Location:** `theme/opacity-dark/opacity`

- Same structure as light theme
- Values match light theme (semantic usage differs)

---

## 4. Component Library

**Location:** `components/library/component`

### 4.1 Button Component

**Base Properties:**
- `radius`: None (0px)
- `borderWidth`: None (0px)

**Variants:**
1. **default** (Inverse/Black)
   - Background: inverse/inverse-hover/inverse-active
   - Text: negative (white)
   - Border: transparent

2. **primary** (Brand Yellow)
   - Background: primary.default/hover/active
   - Text: text.primary
   - Border: transparent

3. **destructive** (Red)
   - Background: danger.default/hover/active
   - Text: text.inverse (white)
   - Border: transparent

4. **outline**
   - Background: transparent/hover/active
   - Text: text.tertiary/secondary/primary (state-based)
   - Border: border.default/hover/active
   - Border Width: default (1px)

5. **ghost**
   - Background: transparent/hover/active
   - Text: text.primary
   - Border: transparent

6. **link**
   - Background: transparent (all states)
   - Text: text.tertiary/secondary/primary (state-based)
   - Border: transparent
   - Text Style: Medium, underline decoration

**Sizes:**
- **default:** 40px height, md/xs padding, text-base medium
- **sm:** 36px height, sm/xs padding, text-sm medium
- **lg:** 44px height, lg/xs padding, text-lg medium
- **icon:** 40px square, sm padding, text-base medium

**Icon Sizing:**
- default: 24px (fixed.6)
- sm: 20px (fixed.5)
- lg: 28px (fixed.7)

### 4.2 Input Component

**Colors:**
- Background: surface.default/disabled/hover
- Border: border.default/disabled/error
- Text: text.primary/placeholder/disabled/error

**Dimensions:**
- `radius`: None (0px)
- `borderWidth`: default (1px)
- `padding.x`: sm (12px) - Note: cursor space handled in CSS
- `padding.y`: xs (8px)

**Sizes:**
- **default:** 40px height, sm/xs padding, text-base medium
- **sm:** 36px height, sm/xs padding, text-sm medium

**Typography:**
- Default: text-base medium
- Helper text: text-sm regular
- Label: text-sm regular

**Gap System:**
- `gap.label`: 4px (vertical between label and input)
- `gap.label-horizontal`: 16px (horizontal when label is left)
- `gap.button`: 8px (between input and button)

**Opacity:**
- `disabled`: 50%
- `placeholder`: 60%

### 4.3 Textarea Component

**Inherits from Input:**
- Background, border, text colors from input
- Radius, borderWidth from input
- Padding.x from input
- Padding.y: md (16px) - larger vertical padding
- Text style from input

### 4.4 Checkbox Component

**Root:**
- Border: border.default/disabled
- Radius: sm (4px)
- Size: 16px (fixed.4)
- Background: surface.default/checked (primary)/disabled

**Indicator:**
- Color: icon.inverse (white)
- Disabled: icon.disabled

### 4.5 Radio Component

**Root:**
- Border: border.default/disabled
- Radius: full (9999px)
- Size: 16px (fixed.4)
- Background: surface.default/disabled

**Indicator:**
- Color: primary.default/disabled
- Size: 8px (fixed.2)

### 4.6 Switch Component

**Root:**
- Background: surface.subtle/checked (primary)/disabled
- Radius: full (9999px)
- Width: 44px (fixed.11)
- Height: 24px (fixed.6)

**Thumb:**
- Background: surface.default/disabled
- Radius: full (9999px)
- Size: 20px (fixed.5)

### 4.7 Label Component

- Text Style: text-sm semibold
- Color: text.primary

### 4.8 Avatar Component

**Root:**
- Radius: full (9999px)
- Overflow: hidden

**Fallback:**
- Background: surface.subtle
- Text: text.secondary

### 4.9 Badge Component

**Base:**
- Radius: full (9999px)
- Border Width: none
- Padding: sm/2xs (12px/4px)
- Text Style: text-sm semibold

**Variants:**
- **default:** primary background, inverse text
- **secondary:** secondary background, inverse text
- **destructive:** danger background, inverse text
- **outline:** transparent background, primary text, border.default, border-width.default

### 4.10 Card Component

- Background: surface.default
- Border: border.subtle
- Border Width: default (1px)
- Radius: lg (8px)
- Padding: lg (24px)
- Text: primary/secondary

### 4.11 Popover Component

- Background: surface.default
- Border: border.subtle
- Radius: md (6px)
- Padding: md (16px)
- Shadow: tw_effects.shadow.md

### 4.12 Menu Base (Shared)

**Content:**
- Background: surface.default
- Border: border.subtle
- Radius: md (6px)
- Padding: 2xs (4px)
- Shadow: tw_effects.shadow.lg

**Item:**
- Background: transparent/hover (emphasis)
- Text: text.primary
- Radius: sm (4px)
- Padding: xs/sm (8px/12px)

**Separator:**
- Background: border.subtle
- Height: 1px

**Label:**
- Text Style: text-sm semibold
- Padding: xs/sm (8px/12px)

### 4.13 Dropdown Menu Component

**Inherits from Menu Base:**
- Content: references menuBase.content
- Item: references menuBase.item
- Additional: bg, bgHover properties for items

### 4.14 Select Component

**Trigger:**
- Border: input.border.default
- Radius: input.radius (none)
- Padding: input.padding.x (sm/12px)
- Height: 40px (fixed.10)

**Content & Item:**
- References menuBase.content and menuBase.item

### 4.15 Menubar Component

**Root:**
- Background: surface.default
- Border: border.subtle
- Radius: md (6px)

**Trigger:**
- Background Hover: background.emphasis

**Content & Item:**
- References menuBase.content and menuBase.item

### 4.16 Navigation Menu Component

**Root:**
- Background: surface.default

**Content:**
- References menuBase.content

### 4.17 Tabs Component

**List:**
- Background: surface.subtle
- Radius: lg (8px)
- Padding: xs (8px)

**Trigger:**
- Background: transparent/active (surface.default)
- Text: text.secondary/active (text.primary)
- Radius: md (6px)

**Content:**
- Border: border.subtle
- Radius: lg (8px)
- Padding: lg (24px)

### 4.18 Accordion Component

**Item:**
- Border: border.subtle

**Trigger:**
- Text: text.primary
- Text Style: text-lg medium
- Padding: md (16px)

**Content:**
- Text: primary/secondary
- Padding: md (16px)

### 4.19 Separator Component

- Background: border.subtle
- Size: 1px

### 4.20 Dialog Component

**Overlay:**
- Background: black
- Opacity: 0.8 (hardcoded, not tokenized)

**Content:**
- Background: surface.default
- Border: border.subtle
- Radius: xl (12px)
- Padding: xl (32px)
- Shadow: tw_effects.shadow.2xl

---

## 5. Reference System

### 5.1 Reference Patterns

The system uses a comprehensive reference pattern with curly brace syntax:

```
{token.set.path.to.value}
```

**Examples:**
- `{fontFamilies.dm-sans}` - References font family
- `{colors.neutral-cool.900}` - References color value
- `{dimensions.fixed.4}` - References dimension value
- `{theme-colors.primary.default}` - References theme token
- `{brand_typography.text-base.medium}` - References typography token
- `{component.button.variant.primary.bg.default}` - References component token

### 5.2 Reference Hierarchy

**Level 1: Direct Primitives**
- Font families, font weights, colors, dimensions

**Level 2: Semantic Primitives**
- Font styling, text dimensions

**Level 3: Theme Tokens**
- Typography, spacing, colors (light/dark)

**Level 4: Component Tokens**
- Component-specific values referencing theme tokens

### 5.3 Cross-References

**Component-to-Component:**
- Textarea references Input tokens
- Select references MenuBase tokens
- DropdownMenu references MenuBase tokens

**Theme-to-Theme:**
- Dark theme colors reference same primitive colors as light theme
- Opacity themes reference primitive opacity values

**Typography References:**
- Brand typography references font families, weights, sizes, line heights, letter spacing

---

## 6. Themes Configuration

### 6.1 Theme Structure

The system defines **3 themes** in the `$themes` array:

#### Theme 1: "always-on"
- **ID:** `89bf9a3ab61c40d6291a24c452efc1591c4d41c0`
- **Group:** primitives
- **Purpose:** Base primitive tokens always available
- **Token Sets:**
  - primitives/dimensions: enabled
  - primitives/colors: enabled
  - primitives/opacity: enabled
  - primitives/text-dimensions-tailwind: enabled
  - primitives/text-dimension-scale: enabled
  - typeface/dm-sans: enabled
  - typeface/behind-the-nineties: enabled

#### Theme 2: "text-scale"
- **ID:** `05ab83c562eae9fce21f897f7b1a74f0e4fd2b7c`
- **Group:** Typography
- **Purpose:** Typography system tokens
- **Token Sets:**
  - primitives/font-styling: enabled
  - theme/typography: enabled

#### Theme 3: "default"
- **ID:** `06c0447b12ae4d0bf224a0eb90b673f151ba8f24`
- **Group:** Theme
- **Purpose:** Main application theme (light mode)
- **Token Sets:**
  - theme/typography: enabled
  - theme/theme-spacing: enabled
  - theme/color-light: enabled
  - theme/opacity-light: enabled

### 6.2 Figma Integration

#### Variable References
Each theme includes `$figmaVariableReferences` mapping token paths to Figma variable IDs.

**Example Pattern:**
```json
"dimensions.fixed.4": "f00ed45afd09970d91f4fdb4b66c7520e9353e15"
```

#### Style References
The "default" theme includes `$figmaStyleReferences` for typography styles:

**Example:**
```json
"brand_typography.text-xl": "S:1befb2b289e263331f60edbfe130631462dc9883,"
```

#### Collection IDs
- **always-on:** VariableCollectionId:13201:1052, Mode: 13201:6
- **text-scale:** VariableCollectionId:13201:1486, Mode: 13201:7
- **default:** VariableCollectionId:13201:1517, Mode: 13201:8

---

## 7. Metadata

### 7.1 Token Set Order

The `$metadata.tokenSetOrder` defines the display/processing order:

1. typeface/dm-sans
2. typeface/behind-the-nineties
3. primitives/colors
4. primitives/opacity
5. primitives/dimensions
6. primitives/font-styling
7. primitives/text-dimensions-tailwind
8. primitives/text-dimension-scale
9. theme/typography
10. theme/theme-spacing
11. theme/color-light
12. theme/opacity-light
13. theme/color-dark
14. theme/opacity-dark
15. components/library

### 7.2 Special Notes

The system includes several documentation tokens with `$type: "other"`:

**Dimensions Notes:**
- `NOTES_on_TW-DIMENSIONS`: Explains that fixed dimensions can be applied to padding, margin, gap, width, height
- `NOTES_on_OUTLINE-OFFSET`: Explains outline offset usage for focus rings
- `NOTES_on_OUTLINE-WIDTH`: Explains outline width usage
- `NOTES_on_BORDER-WIDTH`: Explains border width application

**Font Styling Notes:**
- `font-weight.numeric-values`: Explains Figma limitation with font weights
- `font-weight.customizing`: Warning about error-prone customization
- `font-family.customizing`: Warning about error-prone customization

**Text Dimension Scale Notes:**
- `line-height.leading-normal`: Formula explanation (1.5 rounded to factor of 4)
- `line-height.leading-snug`: Formula explanation (1.375 rounded to factor of 4)
- `font-size.customization`: Notes about custom scale vs Tailwind standard
- `font-size.rem-scale`: Explains 1.2 multiplier and 4px grid rounding

**Typography Notes:**
- `notes.typography`: Notes that all styles use sans font-family tokens

---

## 8. Design System Patterns

### 8.1 Naming Conventions

**Primitive Tokens:**
- Format: `category.subcategory.value`
- Example: `colors.neutral-cool.900`

**Theme Tokens:**
- Format: `theme-category.semantic-name.state`
- Example: `theme-colors.primary.default`

**Component Tokens:**
- Format: `component.component-name.property.variant.state`
- Example: `component.button.variant.primary.bg.hover`

### 8.2 Token Type Usage

**Common Types:**
- `color`: Color values (hex, rgba)
- `dimension`: Size values (px, rem)
- `typography`: Composite typography tokens
- `fontFamilies`: Font family names
- `fontWeights`: Font weight values
- `fontSizes`: Font size values
- `lineHeights`: Line height values
- `letterSpacing`: Letter spacing values
- `opacity`: Opacity percentages
- `boxShadow`: Shadow definitions
- `sizing`: Size values (used for icon sizes)
- `other`: Documentation/notes

### 8.3 State Management

Components use consistent state patterns:
- `default`: Default/rest state
- `hover`: Hover state
- `active`: Active/pressed state
- `disabled`: Disabled state
- `error`: Error state (inputs)
- `checked`: Checked state (checkboxes, switches)

### 8.4 Variant System

**Button Variants:**
- default, primary, destructive, outline, ghost, link

**Badge Variants:**
- default, secondary, destructive, outline

**Size Variants (Buttons, Inputs):**
- sm, default, lg, icon

---

## 9. Integration Points

### 9.1 Tailwind CSS Compatibility

**Dimensions:**
- Fixed dimensions align with Tailwind spacing scale
- Border radius tokens match Tailwind rounded utilities
- Screen breakpoints match Tailwind defaults (with custom 2xs, xs)

**Typography:**
- Font sizes match Tailwind text scale
- Font weights include numeric values matching Tailwind classes
- Letter spacing matches Tailwind tracking utilities

**Colors:**
- Semantic color system ready for Tailwind theme extension
- Opacity values compatible with Tailwind opacity utilities

### 9.2 Shadcn UI Alignment

**Button Heights:**
- Explicitly matches Shadcn sizing (h-9, h-10, h-11)
- Icon sizes match Shadcn conventions

**Component Structure:**
- Component tokens organized similarly to Shadcn component structure
- Variant system aligns with Shadcn patterns

### 9.3 Figma Integration

**Variables:**
- Extensive Figma variable references for all primitive tokens
- Collection and mode IDs for theme management

**Styles:**
- Typography styles exported as Figma text styles
- Style references in default theme

---

## 10. Strengths & Observations

### 10.1 Strengths

1. **Comprehensive Coverage:** Full design system from primitives to components
2. **Theme Support:** Light and dark themes with semantic token system
3. **Documentation:** Inline notes explaining design decisions and limitations
4. **Reference System:** Well-structured token references enabling maintainability
5. **Component Library:** Extensive component token definitions
6. **Accessibility:** Focus ring tokens, proper contrast considerations
7. **Tool Integration:** Figma variables and styles properly mapped
8. **Scalability:** Hierarchical structure supports growth

### 10.2 Observations

1. **Typography Complexity:** Two text dimension systems (Tailwind-compatible and custom scale)
2. **Component Inheritance:** Smart use of references (textarea → input, menus → menuBase)
3. **Hardcoded Values:** Dialog overlay opacity (0.8) not tokenized
4. **Color System:** Three neutral palettes (warm, neutral, cool) for flexibility
5. **Brand Colors:** Four brand color palettes with full scales
6. **Shadow System:** Multi-layer shadows properly defined
7. **Size Consistency:** Button and input heights explicitly defined for Shadcn alignment

### 10.3 Potential Improvements

1. **Dark Theme:** Currently only light theme in "default" - could add dark theme variant
2. **Component Coverage:** Could expand to more components (tooltip, alert, etc.)
3. **Animation Tokens:** No animation/duration tokens defined
4. **Z-Index System:** No z-index tokens for layering
5. **Spacing Scale:** Could add more granular spacing options if needed

---

## 11. Conclusion

This design token system represents a **mature, production-ready architecture** that successfully bridges design and development workflows. The hierarchical structure from primitives through themes to components provides excellent maintainability and scalability.

**Key Achievements:**
- ✅ Complete design system coverage
- ✅ Theme switching capability (light/dark)
- ✅ Component library integration
- ✅ Figma-to-code pipeline ready
- ✅ Tailwind CSS compatibility
- ✅ Shadcn UI alignment
- ✅ Comprehensive documentation

The system is well-positioned for:
- Design system scaling
- Multi-theme support
- Design-to-development handoff
- Component library development
- Design tool integration (Figma)
- Build tool integration (Style Dictionary, Tailwind)

---

**Report Generated:** Analysis of `tokens.json`  
**Total Token Sets:** 14  
**Total Themes:** 3  
**Component Definitions:** 20+  
**Token References:** Extensive cross-referencing system

