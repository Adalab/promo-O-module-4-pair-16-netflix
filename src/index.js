//BACK->
const express = require("express");
const cors = require("cors");
//importo json
const movies = require("../web/src/data/movies.json");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Consigue el id de la película que se va a renderizar
// Buscamos en movies (el mismo nombre que el fihero.json) y el siguiente después de : tiene el nombre que queramos, pero en req.params tiene que ser igual que en el parámetro
server.get("/movies/:movieId", (req, res) => {
  const requestParamsId = req.params.movieId;
  const foundMovie = movies.movies.find(
    (eachMovie) => eachMovie.id === requestParamsId
  );
  console.log(foundMovie);
  res.render("movie", foundMovie);
});

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

server.post("/login", (req, res)) => {
const email = req.body.email
const name = req.body.name
const id = req.body.id
const pass = req.body.pass
  res.json(data)
};
//servidor de estaticos
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

// Servidor de estáticos para las fotos
const staticServerPathImg = "./src/public-movies-images";
server.use(express.static(staticServerPathImg));

// Servidor de estáticos para el css
const staticServerPathCss = "./src/public-css";
server.use(express.static(staticServerPathCss));
