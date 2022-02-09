//BACK->
const express = require("express");
const cors = require("cors");
//importo json
const movies = require("../web/src/data/movies.json");
const users = require("../web/src/data/users.json");
const Database = require("better-sqlite3");

//Le digo a Node que quiero usar esa base de datos
const db = new Database("./src/db/database.db", { verbose: console.log });

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
  // console.log(foundMovie);
  res.render("movie", foundMovie);
});

// Esto es el endpoint (puede ser post, get... y el ./ con la dirección que va en el fetch)
//localhost4000/movies;
server.get("/movies", (req, res) => {
  //<---NUEVO (DATABASE)--->
  // preparamos la query
  const query = db.prepare("SELECT * , name as title FROM movies");
  const queryGender = db.prepare(
    "SELECT * , name as title FROM movies  WHERE gender = ?"
  );
  // const gender = query.all(req.query.gender);
  // ejecutamos la query
  // console.log(req.query.gender);
  const movies = query.all();

  const filterMoviesGender = queryGender.all(req.query.gender);
  let response = {};
  if (filterMoviesGender.length > 0) {
    response = filterMoviesGender;
  } else {
    response = movies;
  }
  // console.log(filterMoviesGender);
  res.json(response);
  // const filteredMovies = req.query.gender
  //   ? users.filter((eachMovie) => eachMovie.gender === req.query.gender)
  //   : movies;

  //genero el objeto q le devuelvo a front
  // const response = {
  //   success: true,
  //   movies: filteredMovies,
  // };
  // esta constante tiene los datos que nos de vuelve data en la API
  //en req.query cojo los parametros de query (los que vienen en la url)
  //en res se los devuelvo al front
  //filtro en movies.movies filtro las peliculas cuyo género sea igual a lo que me viene del parámetro gender y sino devuelvo todo
  // const filteredMovies = req.query.gender
  //   ? movies.movies.filter((eachMovie) => eachMovie.gender === req.query.gender)
  //   : movies.movies;

  // //genero el objeto q le devuelvo a front
  // const response = {
  //   success: true,
  //   movies: filteredMovies,
  // };
  //lo devuelvo
  // res.json(response);
});
//endpoint del login
server.post("/login", (req, res) => {
  const reqEmail = req.body.email;
  const reqPass = req.body.password;
  const query = db.prepare(
    "SELECT * FROM users WHERE email = ? AND password = ?"
  );
  const users = query.get(reqEmail, reqPass);
  //console.log(users);
  // let response = {};
  if (users === undefined) {
    res.json({
      success: false,
      errorMessage: "Usuario no encontrado",
    });
  } else {
    res.json({
      success: true,
      id: users.id,
    });
  }
  //antiguo filtro con json
  //busco dentro del json de users los usuarios que tengan === contraseña y === mail
  // const userFilter = users.filter(
  //   (eachUser) => eachUser.email === reqEmail && eachUser.password === reqPass
  // );

  // if (userFilter.length > 0) {
  //   response = { success: true, id: userFilter[0].id };
  // } else {
  //   response = { success: false, error: "Usuario no encontrado" };
  // }
  // console.log(response);
  // res.json(response);
});

// -------- otra forma de hacer el endpoint de login
// server.post("/login", (req, res) => {
//   const findUser = users.find(
//     (eachUser) =>
//       eachUser.email === req.body.email &&
//       eachUser.password === req.body.password
//   );
//   if (findUser) {
//     res.json({
//       success: true,
//       userId: findUser.id,
//     });
//   } else {
//     res.json({
//       success: false,
//       errorMessage: "Usuario no encontrado",
//     });
//   }
// });
//endpoint sendSingUpToApi

// endpoint de signUp
server.post("/signUp", (req, res) => {
  const reqEmail = req.body.email;
  const reqPass = req.body.password;

  // Seleccionar las usuarias comprobando si está ya guardado su email
  const selectuser = db.prepare("SELECT * FROM users WHERE email = ?");
  const foundUser = selectuser.get(reqEmail);
  // console.log(foundUser);
  if (foundUser === undefined) {
    const querySignUp = db.prepare(
      "INSERT INTO users (email, password) VALUES (?,?)"
    );
    // Hay que ejecutar la sentencia con un run
    const userInsert = querySignUp.run(reqEmail, reqPass);
    // console.log(userInsert);
    res.json({
      success: true,
      userId: userInsert.lastInsertRowid,
    });
  } else {
    res.json({
      success: false,
      errorMessage: "la usuaria no existe",
    });
  }
});

//endpoint de user/movies (Base de datos III)
server.get("/user/movies", (req, res) => {
  const id = req.headers;
  // console.log(userId);
  console.log("headers", req.headers.userid);
  res.json({
    success: true,
    movies: [],
  });
});

//servidor de estaticos
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

// Servidor de estáticos para las fotos
const staticServerPathImg = "./src/public-movies-images";
server.use(express.static(staticServerPathImg));

// Servidor de estáticos para el css
const staticServerPathCss = "./src/public-css";
server.use(express.static(staticServerPathCss));
