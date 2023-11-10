// Expresiones regulares
const regexName = /^[A-Za-z\s]+$/;
const regexRegister = /^\d{8}$/;
const regexLastname = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s'-]+$/;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('data__container');
    form.addEventListener('submit', ValidateForm);

    const name = document.getElementById('name');
    name.addEventListener('blur', function () {
        if (!regexName.test(name.value)) {
            nameError.textContent = 'Nombre inválido';
        } else {
            nameError.textContent = '';
        }
    });

    const lastname = document.getElementById('lastname');
    lastname.addEventListener('blur', function () {
        if (!regexLastname.test(lastname.value)) {
            lastnameError.textContent = 'Apellido inválido';
        } else {
            lastnameError.textContent = ''; 
        }
    });

    const register = document.getElementById('register');
    register.addEventListener('blur', function () {
        if (!regexRegister.test(register.value)) {
            registerError.textContent = 'Matrícula inválida';
        } else {
            registerError.textContent = ''; 
        }
    });

    const grade = document.getElementById('grade');
    grade.addEventListener('blur', function () {
        if (isNaN(grade.value) || grade.value === '' || grade.value < 0 || grade.value > 100) {
            gradeError.textContent = "La nota debe ser un número entre 0 y 100";
        } else{
            gradeError.textContent = '';
        }
    });
});

function ValidateForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const register = document.getElementById('register').value.trim();
    const grade = document.getElementById('grade').value.trim();

    const nameError = document.getElementById('name__error');
    const lastnameError = document.getElementById('lastname__error');
    const registerError = document.getElementById('register__error');
    const gradeError = document.getElementById('grade__error');

    const regexName = /^[A-Za-z\s]+$/;
    const regexRegister = /^\d{8}$/;
    const regexLastname = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s'-]+$/;

    if (!regexName.test(name)){
        nameError.textContent = "Nombre inválido";
        return;
    } else {
        nameError.textContent = '';
    }

    if (!regexLastname.test(lastname)) {
        lastnameError.textContent = "Apellido inválido";
        return;
    } else{
        lastnameError.textContent = '';
    }

    if (!regexRegister.test(register)) {
        registerError.textContent = "Matrícula inválida";
        return;
    } else {
        registerError.textContent = '';
    }

    if (isNaN(grade) || grade === '' || grade < 0 || grade > 100) {
        gradeError.textContent = "La nota debe ser un número entre 0 y 100";
        return;
    } else{
        gradeError.textContent = '';
    }

    const tbody = document.querySelector("#fl__table tbody");

    const fila = document.createElement("tr");
    const celda1 = document.createElement("td");
    const celda2 = document.createElement("td");
    const celda3 = document.createElement("td");
    const celda4 = document.createElement("td");
    const celda5 = document.createElement("td");

    celda1.innerText = name;
    celda2.innerText = lastname;
    celda3.innerText = register;
    celda4.innerText = grade;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("delete__btn");
    btnEliminar.addEventListener("click", function () {
        tbody.removeChild(fila);
    });

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("update__btn");
    btnEditar.addEventListener("click", function () {
        alert('Implementa la lógica para editar la fila aquí');
    });

    celda5.appendChild(btnEliminar);
    celda5.appendChild(btnEditar);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    tbody.appendChild(fila);

    document.getElementById("fl__table").classList.add("visible-table");

    const form = document.getElementById('data__container');
    form.reset();
}
