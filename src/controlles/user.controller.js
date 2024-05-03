import usuarioModel from "../models/user.model.js";



export const getUsuario = async (req, res) => {

try{ 
let usuarios = await usuarioModel.find();
return res.send(usuarios);

} catch(error){
    return req.json({error: "error al mostar los datos" + error});



}
}


  export const postUsuario = async (req, res) => {
try {
let datosUsuario = req.body;
let nuevoUsuario = await usuarioModel.create(datosUsuario);
return res.json(nuevoUsuario);

}catch (error){
    return res.json ({error : "error al crear el usuario", message:error.message});
    

}
  }
  export const putUsuario = async(req, res) => {
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id;

        await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
        return res.json({message:"Usuario actualizado correctamente"});
        
    }catch(error){
        return res.json({error: "error al modificar usuario", message:error.message});
    }
}
export const deleteUsuario = async(req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        } else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar usuario", message:error.message});

    }}