
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Expresiones regulares usadas para los distintos campos.

    const expresiones = {
        usuario: /^[a-zA-Z0-9]{4,16}$/,
        password: /^\S{4,16}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
        nombreApellido: /^[a-zA-Z]{1,40}$/,
        edad: /^(1[89]|[2-9][0-9]|[1-9][0-9]{2,})$/
    }

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            /*
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            */

            // Verifico cada uno de los campos del form con las siguientes lineas de codigo.

            let username = document.getElementById('inputUsername').value;
            if (!expresiones.usuario.test(username)) {
                inputUsername.classList.add('is-invalid');
                inputUsername.classList.remove('is-valid');

            } else {
                inputUsername.classList.add('is-valid');
                inputUsername.classList.remove('is-invalid');
            }

            let contrasenia = document.getElementById('inputPassword').value;
            if (!expresiones.password.test(contrasenia)) {
                inputPassword.classList.add('is-invalid');
                inputPassword.classList.remove('is-valid');
            } else {
                inputPassword.classList.add('is-valid');
                inputPassword.classList.remove('is-invalid');
            }

            let email = document.getElementById('inputEmail').value;
            if (!expresiones.correo.test(email)) {
                inputEmail.classList.add('is-invalid');
                inputEmail.classList.remove('is-valid');
            } else {
                inputEmail.classList.add('is-valid');
                inputEmail.classList.remove('is-invalid');
            }

            let edadUsuario = document.getElementById('inputEdad').value;
            if (!expresiones.edad.test(edadUsuario)) {
                inputEdad.classList.add('is-invalid');
                inputEdad.classList.remove('is-valid');
            } else {
                inputEdad.classList.add('is-valid');
                inputEdad.classList.remove('is-invalid');
            }

            let nombreUsuario = document.getElementById('inputNombre').value;
            if (!expresiones.nombreApellido.test(nombreUsuario)) {
                inputNombre.classList.remove('is-valid');
            } else {
                inputNombre.classList.add('is-valid');
                inputNombre.classList.remove('is-invalid');
            }

            let apellidoUsuario = document.getElementById('inputApellido').value;
            if (!expresiones.nombreApellido.test(apellidoUsuario)) {
                inputApellido.classList.remove('is-valid');

            } else {
                inputApellido.classList.add('is-valid');
                inputApellido.classList.remove('is-invalid');
            }

            // Muestro en pantalla cada vez que hago un submit.

            console.clear();
            console.log('Username: ', username);
            console.log('Contraseña: ', contrasenia);
            console.log('Email: ', email);
            console.log('Edad: ', edadUsuario);
            console.log('Nombre: ', nombreUsuario);
            console.log('Apellido: ', apellidoUsuario);
            event.preventDefault(); // Evito que se envie el form.

            //form.classList.add('was-validated')
        }, false)
    })
})()