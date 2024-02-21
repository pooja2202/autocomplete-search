Autocomplete Search Application
# Project Overview
This ReactJS application provides an autocomplete search functionality for retrieving book summaries from a dataset. Users can search for book summaries, view search results, and add selected summaries to a list of added cards.

# Project Structure
The project consists of the following main files and directories:

1.App.js: Entry point for the application, rendering the header and the AutocompleteSearch component.

2.AutocompleteSearch.js: Main component implementing the autocomplete search functionality.

3.Header.js: Component representing the application header.

4.AutocompleteSearch.module.css: Stylesheet for the AutocompleteSearch component.

5.Header.module.css: Stylesheet for the Header component.

# Functionality
Users can type in the search input to find book summaries.
As users type, search results are dynamically displayed below the search input.
Users can click on a search result to view details of the selected book, including the title, summary, and author.
Users can add the selected book to a list of added cards by clicking the "Add Card" button.
The list of added cards is displayed below the search input.

# Setup and Usage
To run the project locally:

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies using `npm install` or `yarn install`.
Start the development server with `npm start` or `yarn start`.
Access the application in your web browser at [http://localhost:3000].
Dependencies
This project relies on ReactJS and CSS modules for styling.

# Build
The `npm run build` command is used to build the application for production deployment. When executed, it generates a production-ready build of the application within the build folder.

# Build Process Overview:
React is bundled in production mode to optimize performance.
The build process includes minification of code to reduce file sizes.
Filenames are appended with hashes for cache-busting purposes, ensuring efficient caching strategies.
The resulting build is fully optimized and ready to be deployed to a production environment.

# Deployment:
Once the build process is complete, the generated build files in the `build` folder can be deployed to a web server or hosting service to make the application available to users. This command ensures that the application is prepared for deployment with the best performance optimizations in place.

# Dependencies
This project relies on ReactJS and various packages from the React ecosystem. All dependencies are listed in the package.json file.

# Notes
Book data is fetched from a local JSON file named `Data.json`.
The debounce technique is employed to improve search performance by delaying the search function execution.
Clicking on a search result updates the book details and displays them below the search input.

# Contributors
This project was developed by Pooja Bisht