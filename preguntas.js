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
    icon: 'success',
    title: 'Mucha Suerte!'
})

let examen = new Examen();
const btnAvanzar = document.getElementById('btnAvanzar');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', mostrar);
    btnAvanzar.addEventListener('click', verificar);
    
}

let i = 0;
// let = respuesta;

function mostrar(){
    fetch('preguntas.json')
        .then(response => {
            return response.json();
        })
        .then (response => {
            if(i=== response.length){
                location.href ="index.html";
            }
            else{
            document.getElementById('tituloPregunta').innerHTML = `${(i+1)}.${response[i].tituloPregunta}`
            document.getElementById('opcion1').innerHTML =response[i].opciones[0].alternativa1;
            document.getElementById('opcion2').innerHTML =response[i].opciones[0].alternativa2;
            document.getElementById('opcion3').innerHTML =response[i].opciones[0].alternativa3;
            document.getElementById('opcion4').innerHTML =response[i].opciones[0].alternativa4;
            
            respuesta = response[i].respuesta;
            i = i + 1 ;
            }
        })
        // .catch(error =>{
        //     console.log(error);
        // })
}

function verificar (){
    mostrar();

    const tipo = document.querySelector('input[name="alternativas"]:checked').value;
    let respuestaLocalStorage;
    respuestaLocalStorage = examen.obtenerExamenLocalStorage();
    let tamaño = respuestaLocalStorage.length;

    if(respuesta == tipo){
        respuestaLocalStorage[tamaño - 1].puntaje = respuestaLocalStorage[tamaño - 1].puntaje + 1;
        localStorage.setItem('examen', JSON.stringify(respuestaLocalStorage))
    }
    else{
        respuestaLocalStorage[tamaño - 1].puntaje = respuestaLocalStorage[tamaño - 1].puntaje + 0;
        localStorage.setItem('examen', JSON.stringify(respuestaLocalStorage))
    }
}
// function puntajeFinal(){
// Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: respuestaLocalStorage.puntaje ,
//     showConfirmButton: false,
//     timer: 1500
//   })
// }

// if (i === 9){
//     puntajeFinal()
// }