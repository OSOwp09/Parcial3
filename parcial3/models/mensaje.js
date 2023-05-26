const { Schema, model } = require("mongoose");

const MensajeSchema = Schema({
    mensaje: {
        type: String,
        require: true
    }
})

module.exports = model("Mensaje", MensajeSchema);
