
const socketController = (socket, io) => {

	console.log("Cliente Conectado", socket.id);

	socket.on("disconnected", () => {
		console.log("Cliente desconectado", socket.id);
	});

	socket.on("mensaje-de-cliente", (payload, callback) => {
		callback("Tu mensaje fue recibido");

		payload.from = "desde el server";
		socket.broadcast.emit("mensaje-de-server", payload);
	});

	socket.on("enviar-mensaje", ({ from, mensaje }) => {
		io.emit("recibir-mensaje", { from, mensaje });
	});
};

module.exports = { socketController };
