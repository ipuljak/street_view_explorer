# Street View Tourist Client

## Table of Contents
* **[About](#about)**
  * [Installation](#installation)  
  * [Live Deployment](#live-deployment)  
  * [Technology Used](#technology-used)
* **[Project Code](#project-code)**  
  * [File Structure](#file-structure)
  * [Actions](#actions)
    * [Authentication](#authentication)
    * [Street View](#street-view)
    * [Commenting](#commenting)
    * [Favoriting](#favoriting)
  * [Reducers](#reducers)
    * [Authentication Reducer](#authentication-reducer)
    * [Street View Reducer](#street-view-reducer)
  * [App Components](#app-components)
    * [App](#app)
    * [Auth](#auth)
    * [Header](#header)
    * [Footer](#footer)
  * [Routes](#routes)
    * [Home](#home)
    * [Categories](#categories)
    * [Countries](#countries)
    * [Country](#country)
    * [Main](#main)
    * [Footer](#footer)
  * [Testing](#testing)
    * [Action Tests](#action-tests)
    * [Reducer Tests](#reducer-tests)
    * [Component Tests](#component-tests)
* **[About Me](#about-me)**

## About
The Street View Tourist is a full stack project I made which aims to give the user a virtual tourist experience through being able to explore the various Google Street Views of famous landmarks and locations of the world. Starting in December 2016, the aim of the project was to utilize and showcase some of my skills as a web developer. It contains a back-end that runs on node.js, and a front-end written in React.

This repository contains the front-end code for the website, including all redux state actions & reducers, routes, components, containers, and middleware functions. The starting point for the URI is at https://streetviewtourist.com/, or http://localhost:3000/ if running it locally.

### Installation
To install, run:

`npm install`

To run the tests:

`npm run test`

To run the development server (default port 3000):

`npm start`

To run the production server:

`npm run build`

and then serve the build files using the server of your choice.

### Live Deployment
The website is live on (https://streetviewtourist.com/)(#https://streetviewtourist.com/).

### Development Features
The following are some of the various development features used to create this application:
* Written using ES6
* The React framework for the front-end
* React-router to handle the routing
* Redux to store the state
* Redux-thunk middleware for asynchronous action calls
* Redux-form to handle user submitted forms
* AJAX calls to the API through axios
* Twitter Bootstrap's grid system
* Testing with ESLint, Jest, Enzyme, and Sinon
* node.js back-end server served by the Express framework
* MongoDB database to save all of the data
* NGINX for the web server
* Hosting on a Digital Ocean droplet
* CloudFlare DNS for caching
* SSL certificate for https, A+ rating from Qualys SSL Labs

## Project Code

### File Structure
```
├── build/
|   ├── Production build files for the application
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
|   |   ├── Redux actions and types contants definition
│   ├── core/
│   │   ├── Core application components -> app entry point, auth, header
│   ├── reducers/
│   │   ├── Redux reducers for authentication and street view actions
│   ├── routes/
│   │   ├── categories/
|   |   |   ├── Displays all of the categories
│   │   ├── countries/
│   │   │   ├── Displays all of the countries
│   │   ├── country/
|   |   |   ├── Displays information about a selected country
│   │   ├── footer/
|   |   |   ├── Displays the footer pages - about, privacy, etc.
│   │   ├── home/
│   │   │   ├── Displays the home page
│   │   ├── main/
|   |   |   ├── Displays the main views of the application
|   ├── index.js
|   |   ├── Main index file, all definitions & reactDOM render
├── test/
|   ├── Directory for test suites - actions, components, and reducers
├── package.json
|   ├── package.json file
├── README.md
|   ├── README.md file
```

## About Me  
I'm a computer science graduate looking to break into the world of professional software and web development. For more information about me, visit my website at [puljak.ca](https://puljak.ca)!