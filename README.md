# Margarita Mania

An interactive application that allows the user to view and manage margarita recipies.

There are so many different types of margaritas to enjoy, so many in fact, that it has become hard to keep track. Not to worry amigos, with this React application there is a simple way to manage all your margaritas in one place.

## Search, View, Add to Favorites

![Clip 1](/docs/images/clip%201.gif)

## Create a New Margarita

![Clip 2](/docs/images/clip%202.gif)

## Delete a Margarita

![Clip 3](/docs/images/clip%203.gif)

## A Single Page Application created with create-react-app

Margarita Mania is a React single page application (SPA) that was created using create-react-app.

It provides the user with a collection of different margarita recipes, allows them to navigate between pages, save favorites as well as add and remove recipies from the collection.

## Client sided routing with react router

Thanks to dynamic component rendering and client-sided routing using React Router, this application both looks and feels like multiple pages.

Using react router, there is one initial load before our application can move effortlessly between "pages" without that pesky split second of a page refresh. Allowing us to navigate between different components keeping the UI in sync with the browser URL.

## API & Deployment

For the backend for this project I used json-server. On page load, a fetch request is made to retreive all margaritas. Further more, POST, PATCH, and DELETE requests are made to add new, set to favorites, and remove margaritas.

The backend of this project was deployed using Heroku.
The front end using Netlify.

## Features

User can view a collection of all margaritas

User can search for margaritas

User can add new margaritas or delete existing ones

User can save margaritas to favorites

User can view favorite margaritas

## How To Use

Search for margaritas by name using the proivided search bar. Toggle between viewing the complete collection and favorites by checking "Favorites".

Each margarita card can be selected to view details either by clicking "recipie", or by entering the margarita id in the URL. From the details page there is an option to add or remove from favorites as desired. If it is really not your taste, hit "delete" to delete from collection entirely.

From the home page, click "Add New Margarita" to navigate to the form to enter a brand new recipie.

## Attribution

[create-react-app](https://create-react-app.dev/)

[react router](https://reactrouter.com/)

[Heroku](https://heroku.com/)

[Netlify](https://netlify.com/)
