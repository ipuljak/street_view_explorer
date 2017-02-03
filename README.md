# Street View Tourist

## Table of Contents
[About](#about)

[Installation](#installation)

[Structure](#structure)

### About
The Street View Tourist is a full-stack project that I created starting in December 2016. The aim of the project was to utilize and showcase some of my skills as a web developer. It contains a back-end that runs on node.js, and a front-end written in React. 

### Installation
To install, run:

`npm install`

To run the tests:

`npm run test`

To run the development server:

`npm start`

To run the production server:

`npm run build`

and then serve the build files using the server of your choice.

### Structure
```
├── config/
|   ├── Jest & webpack config files
├── node_modules/
|   ├── Module dependencies
├── public/
|   ├── Public files served - index, favicon, images, google analytics
├── scripts/
|   ├── Scripts for running build, start, and test
├── src/
│   ├── actions/
|   |   ├── index.js
|   |   |   ├── Redux actions
|   |   ├── types.js
|   |   |   ├── Types constants definition
│   ├── core/
│   │   ├── app/
│   │   │   ├── App component entry point
|   |   ├── auth/
│   │   │   ├── Authentication container & sign in/out components
│   │   ├── footer/
│   │   │   ├── Footer component & stylesheet
│   │   ├── header/
|   |   ├── ├── Header component & stylesheet
│   ├── reducers/
│   │   ├── authReducer.js
|   |   |   ├── Redux reducer for authentication actions
│   │   ├── index.js
│   │   │   ├── Redux root reducer
│   │   ├── streetViewReducer.js
|   |   |   ├── Redux reducer for street view application actions
│   ├── routes/
│   │   ├── categories/
|   |   |   ├── Route handling to display "categories"
│   │   ├── countries/
│   │   │   ├── Route handling to display "countries"
│   │   ├── country/
|   |   |   ├── Route handling to display country information
│   │   ├── footer/
|   |   |   ├── Route handling for the footer links
│   │   ├── home/
│   │   │   ├── Route handling to display the home page
│   │   ├── main/
|   |   |   ├── Route handling to display the main views of the application
|   ├── index.js
|   |   ├── Main index file, all definitions & reactDOM render
├── style/
|   ├── Main stylesheets
├── test/
|   ├── Directory for test suites - actions, components, and reducers
├── package.json
|   ├── package.json file
├── README.md
|   ├── README.md file
```