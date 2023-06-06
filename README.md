# Two Screen App

This repository contains a two-screen React app that demonstrates basic routing and data fetching using React Router.

The app consists of two screens: a Home screen and a Summary screen. The Home screen allows users to search for a TV show and fetches details about the show from an external API. Users can then navigate to the Summary screen to view additional details about the selected show and book a ticket.

## Features

- Home screen with a search bar to search for a TV show
- Fetching show details from an external API
- Summary screen displaying selected show details
- Option to book a ticket with pre-filled movie name
- User details stored in local storage for ticket booking form

## Technologies Used

- React
- React Router
- Bootstrap (for styling)

## Getting Started

To get a local copy of the project up and running, follow these steps:

   ```
   git clone https://github.com/gupta123shivam/two-screen-app.git
   cd two-screen-app
   npm install
   npm start
```

## Folder Structure
 The project follows a standard folder structure for a React app:

- src: Contains the main source code files
- components: Contains reusable React components
- screens: Contains the Home and Summary screen components
- App.js: Entry point of the application
- index.js: Renders the app into the DOM
