const express = require('express');
const cors = require('cors');
const movies = require('../web/src/data/movies.json')

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Esto es el endpoint (puede ser post, get... y el ./ con la dirección que va en el fetch)
server.get("/movies", (req, res) => {
  // esta constante tiene los datos que nos de vuelve data en la API
  const response = {
      success: true,
      movies
    };
  res.json(response);
});
