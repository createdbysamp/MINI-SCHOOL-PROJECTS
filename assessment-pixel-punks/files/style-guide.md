# PixelPunks Style Guide

This style guide provides visual and structural guidelines to help you recreate the **PixelPunks** homepage from a screenshot. All styles should be written in a separate CSS file and linked in the HTML using a `<link>` tag.

## Fonts

- **Headings and Logo:** Use the "Audiowide" font from Google Fonts.
- **Body Text and UI:** Use the "Roboto" font from Google Fonts.

```css
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
```

## Color Palette

| Name            | Hex Code  | Use                              |
| --------------- | --------- | -------------------------------- |
| Midnight Indigo | `#1e1a38` | Page background                  |
| Electric Cyan   | `#00ffe0` | Primary buttons, accent text     |
| Hot Magenta     | `#ff4ef0` | Main heading and border accents  |
| Dark Purple     | `#2c2541` | Card background                  |
| Neon White      | `#fefefe` | Default text and image borders   |
| Muted Lavender  | `#b4a7d6` | Subtext, borders, and muted text |

## Layout and Structure

- The page uses a **centered container** of approximately 64rem.
- Layouts are built using **flexbox**.
  - Use horizontal flex for header and card rows.
  - Use vertical flex for individual cards.
- Apply consistent **gaps** using utility classes (small, medium, large).
- Cards have a clear structure: image, copy, footer (price and button).

## Header and Navigation

- The header has a magenta bottom border and dark background.
- Logo is styled in large Audiowide font, with the word "Punks" in Electric Cyan.
- The navigation bar sits below the header with a cyan background.
- Nav links are dark purple and have no underline.

## Typography

- **Main title (`h1`)** on the page uses Hot Magenta.
- **Aside section title (`h2`)** uses Electric Cyan.
- Subtext and price text use Roboto. Use the muted lavender tone for subtext.

## Images

- Main feature image is bordered with Neon White and has a large border radius for rounded corners.
- Card images are smaller and stack above their descriptions.

## Buttons

- **Primary buttons** use Electric Cyan.
- **Ghost buttons** are transparent and used for navigation arrows.
- Buttons have modest padding and no default borders.

## Additional Notes

- All cards should have internal padding.
- There is a visible cart icon and item count in the header.
- The search input and button are grouped horizontally.
- A vertical border appears to the left of the "Search" button.

## Summary

This project emphasizes consistent spacing, bold neon-inspired color choices, and a structured layout. Try to match the screenshot as closely as possible while maintaining clean and organized CSS. Paying close attention to detail and doing your best to match the screenshot can make the difference between earning a 'Proficient' versus an 'Exemplary' rating on the rubric.
