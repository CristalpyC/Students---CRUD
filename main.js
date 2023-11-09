
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

    }  console.log({
        'name': name,
        'lastname': lastname,
        'register': register,
        'grade': grade
    });

    //Formulario en blanco, una vez presionemos "agregar"
    const form = document.getElementById('data__container');
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('data__container');
    form.addEventListener('submit', ValidateForm); //evento submit del formulario
});
