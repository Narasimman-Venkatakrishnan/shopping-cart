# ShoppingCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

Clone this repo and install dev dependecies using command `npm install`

Components are created using Angular CLI and Material UI

## Development server

Configure backend service URL in proxyconfig.json(Already configured with default one) 

Run `npm start` or `ng serve --proxy-config proxyconfig.json` for a dev server. 

Navigate to `http://localhost:4200/shop`. The app will automatically reload if you change any of the source files.

As service requires basic auth sometimes browser may prompt login window. Please use credentials configured in microservice properties file(in prod enviroment same can be stored securely in keyvalut)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

