# HNG Task-2 - MovieHub

## MovieHub - Movie Discovery Web Application

## Overview

MovieHub is a web application that allows users to search for movies, view details about them, and save their favorite movies.

## Functional Requirements

1. User Interface:

   - Create a responsive and visually appealing user interface for the application.
   - Display the top 10 movies on the homepage in a grid layout with their movie posters.
   - Each Card component should display the movie title and release date.

2. Movie Search:

   - Implement a search feature that allows users to search for movies by title.
   - Display search results, including movie posters, titles, and release dates.
   - Show a loading indicator while fetching search results.

3. Movie Details:
   - Accessing `/movies/:id` route (where `:id` is the TMDB ID) should lead to the movie details page.
   - Display the following movie details:
   - Title
   - Release Date (in UTC)
   - Runtime (in minutes)
   - Overview

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository:
   `git clone`

2 Install Dependencies (make sure you have NPM installed on your system):
`npm install`

3. Set up your TMDB API key:

   - Create an account on [TDMP](www.themoviedb.org/) to obtain an API key.
   - Store your API key securely in an environment variable or configuration file.

4. Start the development server:
   `npm start`

5. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Technologies Used

    - ReactJS for building the user interface.
    - Bootstrap for styling the application.
    - TMDB API for movie data.
    - Netlify for deployment.

## Contributor

    - [Adedamola Olawale](https://github.com/dprof-code)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
