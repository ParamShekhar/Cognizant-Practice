# Student Course Portal — Digital Nurture 5.0 Angular Hands-On

Single Angular (v20) project covering Hands-On 1 through 10 from the Angular Hands-On Exercise Book.
Each hands-on builds incrementally on this same project (per the submission guidelines), rather than
being split into separate projects.

## Setup

npm install
npm install -g @angular/cli json-server

## Run the mock API (needed for Hands-On 8+)

json-server --watch db.json --port 3000

## Run the app

ng serve
# open http://localhost:4200

## Run tests

ng test

## Where each Hands-On lives

- HO 1-2: src/app/pages/home, src/app/components/header
- HO 2-3: src/app/components/course-card, src/app/directives, src/app/pipes
- HO 4: src/app/pages/enrollment-form (template-driven form)
- HO 5: src/app/pages/reactive-enrollment-form (reactive form)
- HO 6: src/app/services
- HO 7: src/app/app.routes.ts, src/app/guards, src/app/features/enrollment (lazy loaded)
- HO 8: src/app/interceptors, db.json (JSON Server mock backend)
- HO 9: src/app/store (NgRx actions/reducers/selectors/effects)
- HO 10: *.spec.ts files throughout
