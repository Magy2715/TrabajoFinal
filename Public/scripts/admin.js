//verificar conexion html 
console.log("hola soy ema ema");

// funcion para obtener los datos de mi base de dato 
const mostrarUsuarios = async () => {
    try{
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        const usuarios = await respuesta.json();
        console.log(usuarios);
        await mostrarTabla(usuarios);
    }catch(error){
        console.error("error al obtener los usuarios", error);
    }
}

//funcion para crear una fila en mi tabla porcada usuario 
async function mostrarTabla(usuarios){
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML = "";

    await usuarios.forEach(usuario => {
        // Crear los elementos del DOM
        const tr = document.createElement('tr');
        const tdNombre = document.createElement('td');
        const tdCorreo = document.createElement('td');
        const tdButton = document.createElement('td');
        const button = document.createElement('button');

        // Asignar los valores
        tdNombre.textContent = usuario.nombreCompleto;
        tdCorreo.textContent = usuario.correo;
        button.textContent = 'Eliminar';
        button.className = 'btn btn-danger';
        button.id = usuario._id;

        // Agregar el event listener al botón
        button.addEventListener("click", e => {
            console.log(button);
            if(button){
                eliminarUsuario(button);
            } 
        });

        // Agregar los elementos a la fila
        tdButton.appendChild(button);
        tr.appendChild(tdNombre);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdButton);

        // Agregar la fila a la tabla
        tabla.appendChild(tr);
    });
}

mostrarUsuarios();

//funcion para eliminar usuario por id 
function eliminarUsuario(button){
    console.log("eliminando el usuario con el id"+button.id);

    const idUsuarioEliminar = button.id; 
    console.log(idUsuarioEliminar);
fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}` , {method:"DELETE"}).then(
        response => {
            if(!response.ok){
                console.error("error! no se pudo eliminar usuario");
            }else{
                alert("usuario eliminado correctamente"); 
                mostrarUsuarios();
            }
        }).catch(error => {
            console.log("Error al eliminar usuario", error);
        })
};