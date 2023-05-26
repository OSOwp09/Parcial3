const express = require("express");
const router = express.Router();

const { crearUsuario, loginUsuario } = require("../Controllers/auth");

router.post("/", loginUsuario);

router.post(
	"/new",

	crearUsuario
);

module.exports = router;
