# Project Context: Bendy Beth Blog

## Project Overview

**Bendy Beth Blog** is a personal website and portfolio dedicated to sharing stories, advocacy, and resources regarding health conditions such as hEDS (Hypermobile Ehlers-Danlos Syndrome), MCAS (Mast Cell Activation Syndrome), and POTS (Postural Orthostatic Tachycardia Syndrome).

This is a **static website** built with semantic HTML5 and a robust, custom CSS architecture based on a comprehensive design token system. It prioritizes accessibility, performance, and a distinct "modular grid" visual aesthetic.

### Key Technologies
*   **HTML5:** Semantic markup structure.
*   **CSS3:** Custom stylesheet (`globals.css`) utilizing CSS Custom Properties (variables) for theming.
*   **Design Tokens:** A `tokens.json` file serves as the design source of truth, mirroring a system likely exported from Figma (Tokens Studio).
*   **Fonts:** Google Fonts (DM Sans for UI/body, Libre Baskerville for serif accents) and custom font references ("Behind The Nineties").

## Architecture & File Structure

The project has a flat structure for pages with assets organized in a subdirectory.

*   **`*.html`**: The main pages of the site (`index.html`, `about.html`, `blog.html`, `learn.html`, `contact.html`, `privacy.html`).
*   **`globals.css`**: The single source of truth for styles. It contains:
    *   **Design Tokens:** CSS variables for colors, typography, spacing, etc.
    *   **Utility Classes:** Helper classes for layout (`.container`, `.narrow`).
    *   **Component Styles:** Specific styles for the header, footer, cards, and hero sections.
*   **`tokens.json`**: A raw data file defining the design system primitives (colors, dimensions, fonts) and semantic decisions. This file informs the variables in `globals.css`.
*   **`src/assets/`**: Contains image assets, primarily SVGs.

## Building and Running

As a static site, there is no compilation or build step required to view the content.

### Local Development
To view the site locally, serve the project root directory using a static file server.

**Using Python:**
```bash
python3 -m http.server
# Then open http://localhost:8000
```

**Using Node.js (if available):**
```bash
npx serve .
# Then open the provided localhost URL
```

**Direct File Access:**
You can also open `index.html` directly in a web browser, though absolute paths (if any) might behave differently than when served via HTTP.

## Development Conventions

### CSS & Design System
*   **Token-First Approach:** styles should utilize the CSS variables defined in `:root` (e.g., `var(--neutral-900)`, `var(--spacing-4)`) rather than hardcoded values.
*   **Modular Grid Layout:** The visual design relies heavily on borders to create a grid-like structure. Sections often use the classes `.section` and `.box` to apply these borders (`border-top`, `border-bottom`, etc.).
*   **Typography:**
    *   **Headings:** Often use `var(--font-family-serif)` or `var(--font-family-behind-the-nineties)`.
    *   **Body:** Uses `var(--font-family-inter)` (DM Sans).
*   **Responsiveness:** The layout uses a "mobile-first" container approach, with breakpoints defined for `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), and `2xl` (1536px).

### HTML Structure
*   **Page Frame:** Content is wrapped in a `<div class="page-frame">` to provide the outer borders.
*   **Semantic Sections:** Main content is divided into `<section>` tags, typically with a `.container` child for center alignment.
*   **Navigation:** Links in the header are semantic anchors. The "current" state logic isn't strictly enforced in HTML but can be handled via classes if needed.

### Color Palette
The site uses distinct color scales defined in `globals.css`:
*   **Neutral:** Grayscale for text and structure.
*   **Brand Colors:** `Purple`, `Green`, `Yellow`, `Orange`, `Blue` scales are available for accents and distinct sections.
