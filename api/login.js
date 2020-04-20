const { json, send, createError, run } = require("micro");
const fetch = require("isomorphic-unfetch");

const login = async (req, res) => {
  const { correo } = await json(req);
  const { clave } = await json(req);
  const url = `http://localhost:8080/auth/login`;

  try {
    console.log("hoola guardanapos")
    const response = await fetch(url);
    if (response.ok) {
      const { id } = await response.json();
      send(res, 200, { access_token: id });
    } else {
      send(res, response.status, response.statusText);
    }
  } catch (error) {
    throw createError(error.statusCode, error.statusText);
  }
};

module.exports = (req, res) => run(req, res, login);
