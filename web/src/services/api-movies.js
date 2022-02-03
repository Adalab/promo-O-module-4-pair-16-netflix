// login
//getMoviesFromApi es una funcion a la que le he metido un parámetro queryParams que será un objeto (llamo a la funcion con const params de app.js)
const getMoviesFromApi = (queryParams) => {
  console.log("Se están pidiendo las películas de la app");
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  //url fija a la que apuntamos
  const url = "http://localhost:4000/movies";
  ////creo el string de query params usando lo que viene en el objeto queryParams (que es params)
  const dataParams = `?gender=${queryParams.gender}&sort=${queryParams.sort}`;
  //se hace el fetch de todo
  return fetch(url + dataParams)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
