# Angular Amazon Amplify Geo


Application example built with [Angular](https://angular.io/) 13 and adding the map [MapLibre](https://maplibre.org/) component using the [Amazon Amplify Geo](https://docs.amplify.aws/lib/geo/getting-started/q/platform/js/) and [Amazon Location Service](https://aws.amazon.com/location/) services.

This tutorial was posted on my [blog]() in portuguese and on the [DEV Community]() in english.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)
[![Instagram](https://shields.braskam.com/v1/shields?name=instagram&format=rectangle&size=small&radius=5)](https://www.instagram.com/rodrigokamada/)



## Prerequisites


Before you start, you need to install and configure the tools:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/))



## Getting started


### Create the Angular application


**1.** Let's create the application with the Angular base structure using the `@angular/cli` with the route file and the SCSS style format.

```powershell
ng new angular-amazon-amplify-geo --routing true --style scss
CREATE angular-amazon-amplify-geo/README.md (1077 bytes)
CREATE angular-amazon-amplify-geo/.editorconfig (274 bytes)
CREATE angular-amazon-amplify-geo/.gitignore (548 bytes)
CREATE angular-amazon-amplify-geo/angular.json (3327 bytes)
CREATE angular-amazon-amplify-geo/package.json (1089 bytes)
CREATE angular-amazon-amplify-geo/tsconfig.json (863 bytes)
CREATE angular-amazon-amplify-geo/.browserslistrc (600 bytes)
CREATE angular-amazon-amplify-geo/karma.conf.js (1443 bytes)
CREATE angular-amazon-amplify-geo/tsconfig.app.json (287 bytes)
CREATE angular-amazon-amplify-geo/tsconfig.spec.json (333 bytes)
CREATE angular-amazon-amplify-geo/.vscode/extensions.json (130 bytes)
CREATE angular-amazon-amplify-geo/.vscode/launch.json (474 bytes)
CREATE angular-amazon-amplify-geo/.vscode/tasks.json (938 bytes)
CREATE angular-amazon-amplify-geo/src/favicon.ico (948 bytes)
CREATE angular-amazon-amplify-geo/src/index.html (309 bytes)
CREATE angular-amazon-amplify-geo/src/main.ts (372 bytes)
CREATE angular-amazon-amplify-geo/src/polyfills.ts (2338 bytes)
CREATE angular-amazon-amplify-geo/src/styles.scss (80 bytes)
CREATE angular-amazon-amplify-geo/src/test.ts (745 bytes)
CREATE angular-amazon-amplify-geo/src/assets/.gitkeep (0 bytes)
CREATE angular-amazon-amplify-geo/src/environments/environment.prod.ts (51 bytes)
CREATE angular-amazon-amplify-geo/src/environments/environment.ts (658 bytes)
CREATE angular-amazon-amplify-geo/src/app/app-routing.module.ts (245 bytes)
CREATE angular-amazon-amplify-geo/src/app/app.module.ts (393 bytes)
CREATE angular-amazon-amplify-geo/src/app/app.component.scss (0 bytes)
CREATE angular-amazon-amplify-geo/src/app/app.component.html (23364 bytes)
CREATE angular-amazon-amplify-geo/src/app/app.component.spec.ts (1133 bytes)
CREATE angular-amazon-amplify-geo/src/app/app.component.ts (231 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

**2.** Install and configure the Bootstrap CSS framework. Do steps 2 and 3 of the post *[Adding the Bootstrap CSS framework to an Angular application](https://github.com/rodrigokamada/angular-bootstrap)*.

