class Examen {
    empezarExamen(nombre, apellido, edad){
        const infoPersona= {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            puntaje: 0
        }

        this.guardarExamenLocalStorage(infoPersona);

        location.href = "preguntas.html";
    }

    guardarExamenLocalStorage(infoPersona){
        let examen;

        examen = this.obtenerExamenLocalStorage();

        examen.push(infoPersona);

        localStorage.setItem('examen', JSON.stringify(examen));
    }

    obtenerExamenLocalStorage(){
        let examenLocalStorage;

        if(localStorage.getItem('examen') === null){
            examenLocalStorage = [];
        }
        else {
            examenLocalStorage = JSON.parse(localStorage.getItem('examen'));
        }
        return examenLocalStorage;
    }

    leerLocalStorage(e){
        e.preventDefault();

        document.getElementById('muestra-resultados').hidden = false;

        let examenLocalStorage;

        examenLocalStorage = this.obtenerExamenLocalStorage();

        examenLocalStorage.sort ((a,b) => {
            return b.puntaje - a.puntaje;
        })

        examenLocalStorage.forEach(examen => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${examen.nombre}</td>
            <td>${examen.apellido}</td>
            <td>${examen.edad}</td>
            <td>${examen.puntaje}</td>`;
            listaResultados.appendChild(row);
        })
    }
}

// function Temporizador(id, inicio, final){
//     this.id = id;
//     this.inicio = inicio;
//     this.final = final;
//     this.contador = this.inicio;

//     this.contadorSegundos = function (){
//         if(this.contador == this.final){
//             this.contadorSegundos = null;
//             return;
//         }
//         document.getElementById(this.id).innerHTML = this.contador--;
//         setTimeout(this.contadorSegundos.bind(this), 1000);
//     }
// }

// let temporizador = new Temporizador('temporizador', 20, -1);

// let i = 0;
function puntajeFinal(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: respuestaLocalStorage.puntaje ,
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    if (i === 9){
        puntajeFinal()
    }