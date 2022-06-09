// localStorage.clear();

const botonEmpezar = document.getElementById('btnEmpezar');
let examen = new Examen();
const listaResultados = document.getElementById('listaResultados')
const btnResultado = document.getElementById('btnResultado')


cargarEventos();

function cargarEventos() {
    botonEmpezar.addEventListener('click', verificar);
    btnResultado.addEventListener('click', (e) => {
        examen.leerLocalStorage(e)
    });
}


function verificar(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;

    if (nombre === '' || apellido === '' || edad === '') {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Datos insuficientes!'
        })
    }
    else {
    examen.empezarExamen(nombre, apellido, edad);
    }
}