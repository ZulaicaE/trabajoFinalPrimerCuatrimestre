
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                let username = document.getElementById('inputUsername').value;
                if (!expresiones.usuario.test(username)) {
                    inputUsername.classList.add('is-invalid');
                    inputUsername.classList.remove('is-valid');
                    event.preventDefault();
                } else {
                    inputUsername.classList.add('is-valid');
                    inputUsername.classList.remove('is-invalid');
                    event.preventDefault();
                }
                
                
                let contrasenia = document.getElementById('inputPassword').value;
                if (!expresiones.password.test(contrasenia)) {
                    inputPassword.classList.add('is-invalid');
                    inputPassword.classList.remove('is-valid');
                    event.preventDefault();
                } else {
                    inputPassword.classList.add('is-valid');
                    inputPassword.classList.remove('is-invalid');
                    event.preventDefault();
                }
            
  
  
        //form.classList.add('was-validated')
      }, false)
    })
  }) ()

  const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/,
    password: /^\S{4,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
    nombre: /^[a-zA-Z]{1,40}$/,
    apellido: /^[a-zA-Z]{1,40}$/,
    edad: /^[1-99]{1,2}$/
}

function validarFormulario() {

    let password = document.getElementById('inputPassword').value;
    let email = document.getElementById('inputEmail').value;
    let edad = document.getElementById('inputEdad').value;
    let nombreUsuario = document.getElementById('inputNombre').value;
    let apellidoUsuario = document.getElementById('inputApellido').value;
}

