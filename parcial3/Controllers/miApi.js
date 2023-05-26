const express = require("express");
const Mensaje = require("../models/mensaje");

const miApi = async (req, res = express.request) => {
	const texto = "holaaaa";

	const mensaje = new Mensaje({ mensaje: texto });

	await mensaje.save();

	return res.status(200).json({
		ok: true,
		mensaje,
	});
};


module.exports = {
	miApi,
};
