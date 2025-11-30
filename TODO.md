# Plan to Make Site Style Like Crunchyroll

## Information Gathered
- Current site uses SCSS with variables in _variables.scss: $primary (#f47521 - orange), $secondary (#23252b - dark gray).
- _main.scss sets body background to $secondary, header to $secondary.
- _dash.scss styles dashboard with dark backgrounds and orange accents.
- Crunchyroll has a very dark background (#0f0f0f), vibrant orange (#ff6b35), clean layout with high contrast.

## Plan
- [x] Update _variables.scss with Crunchyroll-inspired colors: darker secondary (#0f0f0f), adjusted primary (#ff6b35).
- [x] Adjust _main.scss for darker body background if needed.
- Modify _dash.scss for better contrast and modern look.

## Dependent Files to Edit
- grails-app/assets/stylesheets/_variables.scss
- grails-app/assets/stylesheets/_main.scss
- grails-app/assets/stylesheets/_dash.scss

## Followup Steps
- Test the site after changes to ensure proper rendering.
- Possibly adjust other stylesheets if contrast issues arise.
