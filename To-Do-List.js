function eliminarTarea() {

    let liTarea = this.parentNode;

    liTarea.parentNode.removeChild(liTarea);

}

function completaTarea() {

    let spanCompletado = document.getElementById('span-tarea');

    if (this.checked) {
        spanCompletado.classList.add('tarea-completada');
    } else {
        spanCompletado.classList.remove('tarea-completada');
    }

}

function agregaTarea() {

    let tarea = document.getElementById('nueva-tarea');

    if (tarea.value != '') {
        let nuevaTarea = document.createElement('li');
        nuevaTarea.setAttribute('id', 'class-tarea');
        
        let spanTarea = document.createElement('span');
        spanTarea.setAttribute('class', 'mi-tarea');
        spanTarea.setAttribute('id', 'span-tarea');
        spanTarea.innerHTML = tarea.value;

        let checkCompletada = document.createElement('input');
        checkCompletada.setAttribute('class', 'form-check-input class-checkbox');
        checkCompletada.setAttribute('type', 'checkbox');
        checkCompletada.setAttribute('value', '');
        checkCompletada.setAttribute('id', 'tarea-checkbox');
        checkCompletada.addEventListener('change', completaTarea);

        let checkLabel = document.createElement('label');
        checkLabel.setAttribute('class', 'form-check-label label-marcado');
        checkLabel.setAttribute('for', 'tarea-checkbox');
        checkLabel.innerHTML = 'Marcar completada';

        let botonEliminar = document.createElement('button');
        botonEliminar.setAttribute('class', 'btn boton-eliminar');
        botonEliminar.addEventListener('click', eliminarTarea);

        nuevaTarea.appendChild(spanTarea);
        nuevaTarea.appendChild(checkCompletada);
        nuevaTarea.appendChild(checkLabel);
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        
        tarea.value = '';
    }
}

const botonAgregar = document.getElementById('boton-agregar');
const listaTareas = document.getElementById('lista-tareas');

botonAgregar.addEventListener('click', agregaTarea);



