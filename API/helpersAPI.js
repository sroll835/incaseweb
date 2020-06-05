export function getUserbyid(id_user) {
  const url = "http://localhost:8080/usuarios/" + id_user;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getUserwithCursosByUserId(id_user) {
  const url = "http://localhost:8080/usuarios/cursos/" + id_user;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getCursowithClassesByIdCurso(id_curso) {
  const url = "http://localhost:8080/cursos/" + id_curso;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function createUsuario(usuario) {
  console.log(usuario);
  const url = "http://localhost:8080/usuarios";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => console.log(response.status))
    .catch((error) => console.error(error));
}

export function updateUsuario(usuario) {
  const url = "http://localhost:8080/usuarios";
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => console.log(response.status))
    .catch((error) => console.error(error));
}
