# Street View Tourist Client

The Street View Tourist utilizes the power of Google Street View to bring to life the many landmarks and locations this world has to offer. Save the trip fees and explore the world in the comfort of your own chair!

## Table of Contents
* **[About](#about)**
  * [Installation](#installation)  
  * [Live Deployment](#live-deployment) 
  * [How To Use](#how-to-use) 
  * [Development Features](#development-features)
* **[Project Code](#project-code)**  
  * [File Structure](#file-structure)
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
  * [Actions](#actions)
    * [Authentication](#authentication)
    * [Street View](#street-view)
    * [Commenting](#commenting)
    * [Favoriting](#favoriting)
  * [Reducers](#reducers)
    * [Authentication Reducer](#authentication-reducer)
    * [Street View Reducer](#street-view-reducer)
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
The website is live on [https://streetviewtourist.com/](#https://streetviewtourist.com/).

### How To Use
Harness the power of Google Street View and explore the world through our wonderfully categorized locations. Our website makes discovering new locations easy. You can discover new places in many of our different countries and cities, but if you're unsure where you'd like to go, then you can look around through the many various category types.

Upon page load, the user can explore the various views by going through their "types", i.e. bridges, museums, statues, etc., or they can find them through the countries and cities in which they are located in. A view of a location includes Google Street View access to it, a photograph, an excerpt from Wikipedia, as well as a link to read more. The user also has a list of other views available depending on how it's indexed, and they can click to immediately load in another location without reloading the page. The website is complete with user authentication, and features a favouriting and commenting system.

We are always updating the database with more and more locations for you to explore and enjoy. All of our locations are manually inputted to ensure that each view is easily accessible in the Street View window and allows you to walk around and explore. A future update will allow users to submit their own locations and edit the content of existing ones.

Registering to our website is free and easy! You'll be able to save your favorite locations and (in a future update) be able to revisit them through your profile. You can also leave a comment on each of the views where you may engage with the other community members.

This website is a single page application powered by the React framework offering a fast and responsive browsing experience. You may instantly change categories or countries, as well as switch from one view onto another through the sidebar.

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

### App Components
The following are the core application components that compose The Street View Tourist:

#### App
This is the main entry point which serves as a higher order component which wraps the rest of the application as its children.

#### Auth
This contains the authentication components which act as Redux-form containers. They allow users to register and log in to the website by dispatching actions which connect to the back-end.

##### Signin
The Signin component can be accessed through the /signin route. It is a modal which pops up on any page, and allows the user to enter their username and password credentials. The form validates for various errors, such as missing parameters.

##### Signup
The Signup component can be accessed through the /signup route. It is a modal which pops up on any page, and allows the user to register to the website by providing a username and password. The form validates for various errors including unique usernames, and matching passwords.

#### Header
The Header component displays the navigation bar on the top of every page. It allows easy access to the home page, categories & countries pages, as well authentication functions including signing in, signing up, and signing out.

#### Footer
The Footer component displays the footer at the bottom of every page. It allows easy access to pages such as About, Privacy Policy, and various forms of social media.

### Routes
The following are the different routes that are accessible through react-router:

#### Home
`/`

The Home component is a container which serves as the home page for the website. It renders a title and slogan, as well as button access to two separate types of views: Categories and Countries. It also displays some information about the website.

#### Categories
`/categories`

The Categories component renders a list of types of locations or structures that the Street View locations are indexed by and that the user can further explore. When clicked, it will take you to the locations page for that category and display a list of views to explore in the sidebar. Examples of categories include bridges, churches, parks, towers, and much more.

#### Countries
`/countries`

The Countries component renders a list of countries that the Street View locations are indexed by and that the user can further explore. When clicked, it will take you to the country page (see the following component).

#### Country
`/country/[COUNTRY]`

The Country component renders information about a selected country, an image, as well as a sidebar which contains a list of all cities that are indexed and in the selected country. The user can then select a city and explore its views.

#### Main
`/location/[LOCATION]`

The Main component which acts as a container that displays the individual views. A sidebar on the left shows a list of all the accessible views for this location, and when clicked will load the contents on the right. The contents include a Street View panorama, an image, a description of the view, a link for further reading, and comments for that view. If the user is authenticated, they also have the option to "favorite" the view, as well as add their own comment in.

The "LOCATION" the route refers to is either a category type (i.e. church, tower, etc.) or a city (i.e. London, Toronto, etc.). When you first land on one of these pages, say /location/toronto, the sidebar will list all of the views available in Toronto. For instance, this would include places such as the C.N. Tower, Royal Ontario Museum, Toronto Zoo, etc. When any of these views are clicked, the route or sidebar does not change, however the view that is clicked is immediately loaded in to the right and displays the relevant contents. This "hot loading" provides the user with a seamless experience where they may jump from view to view without having to wait for the page to reload.

#### Footer
`/location/about`  
`/location/privacy_policy`  
`/location/contact`

The Footer component is displayed at the bottom of every page. It allows easy access to pages such as About, Privacy Policy, and various forms of social media.

### Actions
The following are the various actions that can be dispatched throughout the application structure:

#### Authentication

##### authError
Sets the state to indicate if an error occured during an authentication API call. Dispatches AUTH_ERROR.

##### signinUser
Authenticates and signs in a user given a username and password. Makes an API call to:  

`http://localhost:3001/api/street_view/auth/signin`  

Dispatches AUTH_USER and AUTH_NAME.

##### signupUser
Registers a user given a unique username and password. Makes an API call to:  

`http://localhost:3001/api/street_view/auth/signup`

Dispatches AUTH_USER and AUTH_NAME.

##### signoutUser
Signs the user out. Dispatches UNAUTH_USER.

#### Street View

##### fetchTypes
Sets the types of the existing views in the state. Dispatches FETCH_TYPES.

##### getDistincts
Fetches all of the distinct categories of locations from the API server. Makes an API call to:

`http://localhost:3001/api/street_view/info/get_distincts`

Dispatches to fetchTypes.

##### setCountry
Given a country, fetches its information and cities. Makes an API call to

`http://localhost:3001/api/street_view/info/get_country_info?country=[COUNTRY]`
  
where COUNTRY is the desired country. Dispatches CURRENT_COUNTRY.

##### searchLocations
Returns a list of locations given a search term (city, type, etc.). Makes an API call to:

`http://localhost:3001/api/street_view/info/search_locations?search=[TERM]`

where TERM is a search parameter such as a city (Ottawa, Toronto) or type (building, church). Dispatches VIEWS_BY_TYPE.

##### setView
Sets the current view in the state. Dispatches CURRENT_VIEW.

#### Commenting

##### getComments
Returns a list of comments given a view ID. Makes an API call to:

`http://localhost:3001/api/street_view/comments/get_comments?id=[ID]`

where ID is the unique identifier to a view. Dispatches CURRENT_COMMENTS.

#### Favoriting

##### getFavorites
Returns a list of a user's favorite views given their username. Makes an API call to:

`http://localhost:3001/api/street_view/favorites/get_favorites?username=[USERNAME]`

where USERNAME is the desired user's username. Dispatches USER_FAVORITES.

##### favorite
Add a favorite view to an authenticated user given a view ID. Makes an API call to:

`http://localhost:3001/api/street_view/favorites/add_favorite?id=[ID]`

where ID is the unique identifier to a view. The user's username is passed through the request body. Dispatches ADD_FAVORITE.

##### unfavorite
Removes a favorite view from an authenticated user given a view ID. Makes an API call to:

`http://localhost:3001/api/street_view/favorites/remove_favorite?id=[ID]`

where ID is the unique identifier to a view. The user's username is passed through the request body. Dispatches REMOVE_FAVORITE.

### Reducers
The following are the reducers that are used to form the Redux state throughout the application:

#### Authentication Reducer
Cases: 

##### AUTH_USER
If the user has been authorized, flags authenticated to true.

##### AUTH_NAME
If the user has been authorized, adds their username to the state.

##### UNAUTH_USER
If the user has been unauthorized, flags authenticated to false.

##### AUTH_ERROR
If there is an error with the authentication, sets an error message.

#### Street View Reducer
Cases:

##### FETCH_TYPES
Sets types to be the categories/countries retrieved from the API.

##### VIEWS_BY_TYPE
Sets allViews to be the list of available views once given a category/country.

##### CURRENT_COUNTRY
Sets country to be country retrieved from the API.

##### CURRENT_VIEW
Sets view to be the currently selected view.

##### CURRENT_COMMENTS
Sets comments to be the comments of the currently selected view.

##### USER_FAVORITES
Sets favorites to be a list of the user's favorite views.

##### ADD_FAVORITE
Adds a favorite into the list of a user's favorite views.

##### REMOVE_FAVORITE
Removes a favorite into the list of a user's favorite views.

### Testing
The following is what is covered by unit tests. The tests are written using Jest, Enzyme, and Sinon.

#### Component Tests

##### App Tests
App...
* renders the app.

##### Categories Tests
Categories...
* renders the container.
* contains a footer.
* scrolled to the top when it was loaded.
* has the correct title.

Category Links...
* renders 3 category links.
* Bridge links to /location/bridge.
* Bridge contains an image.

##### Countries Tests
Countries...
* renders the container.
* contains a footer.
* scrolled to the top when it was loaded.
* has the correct title.

Country Links...
* renders 3 country links.
* Canada links to /country/Canada.
* Canada contains an image.

##### Country Tests
Country...
* renders the container.
* shows the correct title.
* renders an image for the country.
* inserted a line break for the newline.
* links to the correct data source.

##### Country Sidebar Tests
Country Sidebar...
* renders the component.
* renders a Link to /location/Ottawa.

##### Footer Tests
Footer...
* renders the component.
* contains an actual footer.
* renders a link to the privacy policy.
* link to privacy policy is named correctly.

##### Header Tests
Header...
* renders the container.
* renders an IndexLinkContainer to '/'.
* renders a NavItem with the text 'Home'.
* renders a LinkContainer to '/categories'.
* renders a NavItem with the text 'Categories'.
* does not initially display a modal.

When a user goes to sign up...
* sets showModal state to be true when the sign in button is clicked.
* shows a modal when the sign in button is clicked.

When not authenticated...
* shows the user a sign in NavItem.
* does not show the user a sign out NavItem.

##### Home Tests
Home...
* renders the container.
* contains a footer.
* scrolled to the top when it was loaded.

##### Info Tests
Info...
* renders the component.
* contains a single image.
* contains info to be shown.
* removes newlines from the info.

##### Locations Tests
Locations...
* renders the component.
* contains the item name.
* contains the item data.

##### Privacy Tests
Privacy...
* renders the component.
* contains a privacy policy.
* has a footer.

##### Sidebar Tests
Sidebar...
* renders the component.
* has two Locations items.

Views...
* are clickable.

##### Signin Tests
Signin...
* renders the container.
* contains a Redux Form.

##### Signup Tests
* renders the container.
* contains a Redux Form.

#### Action Tests

##### Auth Actions
signinUser...
* should create an AUTH_USER action.

signoutUser...
* should create an UNAUTH_USER action.
* should remove a token from localStorage.
* should handle an empty token special case.

authError...
* should create an AUTH_ERROR action.
* should have the correct payload.

##### Street View Actions
This section remains unfinished due to problems integrating axios with nock for action testing.

#### Reducer Tests

##### Auth Reducer
Auth Reducer...
* should return the initial state.
* should handle AUTH_USER.
* should handle AUTH_NAME.
* should handle UNAUTH_USER without data.
* should handle UNAUTH_USER with data.
* should handle AUTH_ERROR.

Street View Reducer...
* should return the initial state.
* should handle FETCH_TYPES.
* should handle VIEWS_BY_TYPE.
* should handle CURRENT_COUNTRY.
* should handle CURRENT_VIEW.
* should handle CURRENT_COMMENTS.
* should handle DELETE_COMMENT.
* should handle USER_FAVORITES.
* should handle ADD_FAVORITE.
* should handle REMOVE_FAVORITE.

## About Me  
I'm a computer science graduate working as a software developer at [JoeZoo Inc.](https://getjoezoo.com/). For more information about me, visit my website at [puljak.ca](https://puljak.ca)!