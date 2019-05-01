# population-management-system
This is a system that manages the population of states or community

[![Coverage Status](https://coveralls.io/repos/github/DinmaOtutu/population-management-system/badge.svg?branch=master)](https://coveralls.io/github/DinmaOtutu/population-management-system?branch=master)


## Setup

### Dependencies

list of libraries, tools, and technologies used.

- [express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment
- [MongoDB](https://mlab.com/) - For database services
- A package manager - [[NPM](https://www.npmjs.com/)

### Getting Started

- clone the repo - `https://github.com/DinmaOtutu/population-management-system.git`
- Navigate to the project directory and open on any editor, VS Code preferably.
- Install the project dependencies by running `npm Install`
- After installation, run `npm test` 
- To start the server run `npm start` #production
- To start the server run `npm run dev` #dev

# Project Structure
The project structure follows the **MVC** (Model-View-Controller) pattern. You can think of the **JSON** representation of data returned by the API as the 'view'.
```
├── src/
    ├── controllers
        ├── LocationController.js
    ├── helpers
        ├── totalPopulation.js
    ├── middlewares
        ├── checkLocationExist.js
        ├── errorHandler.js
        ├── verifyInputs.js
    ├── models
        ├── Location.js
    ├── repositories
        ├── BaseRepository.js
    ├── routers
        ├── index.js
        ├── location.js
    ├── tests
        ├── location.js
    ├── utils
        ├── logger.js
    ├── app.js
├── README.md
```

You should now be able to access the API via http://localhost:6666/api/

**NOTE:** Create a `.env` file configuration following the `.env.example`.

## API Endpoints

<table>
<tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th></tr>
<tr><td>POST</td><td>/api/location</td><td>Creates a new location</td></tr>
<tr><td>GET</td><td>/api/location</td><td>Returns available locations</td></tr>
<tr><td>PUT</td><td>/api/location/:id</td><td>Updates a location</td></tr>
<tr><td>DELETE</td><td>/api/location/:id</td><td>Deletes a location</td></tr>
</table>


## Postman Documentation
`https://documenter.getpostman.com/view/4552812/S1Lr5rYz`

## AUTHOR
- Yours truly DinmaOtutu
