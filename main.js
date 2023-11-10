
//Validación del formulario
function ValidateForm(e) {
    e.preventDefault(); // Evitar el envío del formulario y la recarga de la página

    //Elementos (manejo del DOM)
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const register = document.getElementById('register').value.trim();
    const grade = document.getElementById('grade').value.trim();

    //Expresiones regulares
    const regexName = /^[A-Za-z\s]+$/;
    const regexRegister = /^\d+$/; 
    const regexLastname = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s'-]+$/;

    //Validez de los datos suministrados por el usuario
    if (!regexName.test(name)){
        alert('Nombre inválido');
        return;
    }

    if (!regexLastname.test(lastname)) {
        alert('Apellido inválido');
        return;
    }

    if (!regexRegister.test(register)) {
        alert('Solo dígitos');
        return;
    }
    if (isNaN(grade) || grade === '' || grade < 0 || grade > 100) {
        alert('La nota debe ser un número entre 0 y 100');
        return;

    }  


    //Agregando campos
    // Selecciona el elemento tbody de la tabla con el id "tabla".
    var tbody = document.querySelector("#fl__table tbody");

    // Crea una nueva fila y celdas para cada dato ingresado.
    var fila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    var celda5 = document.createElement("td");

    // Asigna los valores de los campos de entrada a las celdas correspondientes.
    celda1.textContent = name;
    celda2.textContent = lastname;
    celda3.textContent = register;
    celda4.textContent = grade;

     // Botónn eliminar: Eliminando campos
    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("delete__btn");
    btnEliminar.addEventListener("click", function () {
        tbody.removeChild(fila);
    });

    //Boton editar: Editando campos
    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("update__btn");
    btnEditar.addEventListener("click", function () {
        // Aquí puedes implementar la lógica para editar la fila si es necesario
        alert('Implementa la lógica para editar la fila aquí');
    });
 
     // Agrega los botones a la celda5
     celda5.appendChild(btnEliminar);
     celda5.appendChild(btnEditar);

    // Agrega las celdas a la fila.
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    // Agrega la fila a la tabla.
    tbody.appendChild(fila);

    // Muestra la tabla estableciendo su estilo de visualización en "table".
    document.getElementById("fl__table").style.display = "table";

    //Formulario en blanco, una vez presionemos "agregar"
    const form = document.getElementById('data__container');
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('data__container');
    form.addEventListener('submit', ValidateForm); //evento submit del formulario
});
