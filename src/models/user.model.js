import mongoose from "mongoose";

const schema = mongoose.Schema;

const usuarioSchema = new schema({
    nombreCompleto: {
        type: String,
        required: true

    },
    correo: {
        type: String,
        required: true

        
    },

    contrasena: {
        type: String,
        required: true
        
    },

});



const usuarioModel = mongoose.model("usuario", usuarioSchema);

export default usuarioModel;

