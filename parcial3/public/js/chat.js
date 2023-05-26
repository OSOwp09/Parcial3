const txtUid = document.querySelector("#txtUid");
const chats = document.querySelector("#chats-body");
const apibtn = document.querySelector("#apibtn");

const fetchApi = async () => {
	const resp = await fetch("http://localhost:4000/api/miApi/");
	const respJson = await resp.json();

	return respJson.mensaje.mensaje;
};

apibtn.addEventListener("click", async () => {
	const mensaje = await fetchApi();

	const payload = {
		from: socket.id,
		mensaje,
	};

	socket.emit("enviar-mensaje", payload);
});

socket.on("recibir-mensaje", (payload) => {
	console.log(payload);
	const className =
		payload.from == socket.id ? "text-end" : "text-start text-primary";

	chats.innerHTML += `<li class="${className}"><small>  ${payload.mensaje}</small></li>`;
});
