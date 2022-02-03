//BACK->
const express = require("express");
const cors = require("cors");
//importo json
const movies = require("../web/src/data/movies.json");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//servidor de estaticos
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

// Esto es el endpoint (puede ser post, get... y el ./ con la dirección que va en el fetch)
//localhost4000/movies;
server.get("/movies", (req, res) => {
  // esta constante tiene los datos que nos de vuelve data en la API
  //en req.query cojo los parametros de query (los que vienen en la url)
  //en res se los devuelvo al front
  console.log(`query params: ${req.query}`);
  //filtro en movies.movies filtro las peliculas cuyo género sea igual a lo que me viene del parámetro gender y sino devuelvo todo
  const filteredMovies = req.query.gender
    ? movies.movies.filter((eachMovie) => eachMovie.gender === req.query.gender)
    : movies.movies;
  //genero el objeto q le devuelvo a front
  const response = {
    success: true,
    movies: filteredMovies,
  };
  //lo devuelvo
  res.json(response);
});
