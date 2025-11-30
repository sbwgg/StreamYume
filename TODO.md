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
=======
# Plan to Make Site Style Like Crunchyroll

## Information Gathered
- Current site uses SCSS with variables in _variables.scss: $primary (#f47521 - orange), $secondary (#23252b - dark gray).
- _main.scss sets body background to $secondary, header to $secondary.
- _dash.scss styles dashboard with dark backgrounds and orange accents.
- Crunchyroll has a very dark background (#0f0f0f), vibrant orange (#ff6b35), clean layout with high contrast.

## Plan
- [x] Update _variables.scss with Crunchyroll-inspired colors: darker secondary (#0f0f0f), adjusted primary (#ff6b35).
- [x] Adjust _main.scss for darker body background if needed.
- [x] Modify _dash.scss for better contrast and modern look.

## Dependent Files to Edit
- grails-app/assets/stylesheets/_variables.scss
- grails-app/assets/stylesheets/_main.scss
- grails-app/assets/stylesheets/_dash.scss

## Followup Steps
- Test the site after changes to ensure proper rendering.
- Possibly adjust other stylesheets if contrast issues arise.

# Plan to Add News Section

## Information Gathered
- Grails app with Angular frontend.
- Domain classes in grails-app/domain/streama/.
- Controllers in grails-app/controllers/streama/.
- Angular routes in streama.routes.js.
- Templates in grails-app/assets/javascripts/streama/templates/.
- Controllers in grails-app/assets/javascripts/streama/controllers/.
- API service in api-service.js.
- Header template in grails-app/views/templates/_header.gsp.
- Admin template in admin.tpl.htm.

## Plan
- [x] Create News domain class.
- [x] Create NewsController with CRUD actions.
- [x] Update UrlMappings for news API.
- [x] Add NEWS to translations.
- [x] Add news tab to header.
- [x] Add news state to routes.
- [x] Create news template and controller.
- [x] Add admin.news state to routes.
- [x] Add news tab to admin nav.
- [x] Create admin-news template and controller.
- [x] Add news API to apiService.

## Dependent Files to Edit
- grails-app/domain/streama/News.groovy
- grails-app/controllers/streama/NewsController.groovy
- grails-app/controllers/streama/UrlMappings.groovy
- grails-app/i18n/messages.properties
- grails-app/views/templates/_header.gsp
- grails-app/assets/javascripts/streama/translations/EN_us.js
- grails-app/assets/javascripts/streama/streama.routes.js
- grails-app/assets/javascripts/streama/templates/admin.tpl.htm
- grails-app/assets/javascripts/streama/templates/admin-news.tpl.htm
- grails-app/assets/javascripts/streama/controllers/admin-news-ctrl.js
- grails-app/assets/javascripts/streama/templates/news.tpl.htm
- grails-app/assets/javascripts/streama/controllers/news-ctrl.js
- grails-app/assets/javascripts/streama/services/api-service.js

## Followup Steps
- Test the news functionality.
- Run the app and check if news tab works.
- Check admin news management.
