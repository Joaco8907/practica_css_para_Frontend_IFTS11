/**
 * javascrpt 25 ptos
 * definir un array de 3 objetos con estos datos. 
 * 
 * Abril Gomez, 18, Natacion
 * Joaquin Silva, 21, Basquet
 * Milagros Acosta, 20, Vóley
 * 
 * capturar el evento click del boton para inciar la carga de las inscripciones. 
 * recorrer el array e incertar dinamicamente las filas de la tabla.
 * agregar dinamicamente un boton Eliminar en cada fila. Al pulsarlo, quitar la inscripcion correspondiente del array en memoria y actualizar la tabla sin recargar la pagina. 
 */


const personas = [{
    Participante: "Abril Gomez",
    edad: 18,
    Actividad: "Natación"
},
{
    Participante: "Joaquin Silva",
    edad: 21,
    Actividad: "Basquet"
},
{
    Participante: "Milagros Acosta",
    edad: 20,
    Actividad: "Voley"
}
]



const boton = document.getElementById("cargar")
const cuerpo = document.getElementById("cuerpoTabla")



function CargarInscripciones() {
    if (cuerpo.children.length === 0) {
        personas.forEach((p, indice) => {
            const fila = document.createElement("tr");
            const celdaParticipante = document.createElement("td");
            celdaParticipante.innerText = p.Participante;
            const celdaEdad = document.createElement("td");
            celdaEdad.innerText = Number(p.edad);
            const celdaActividad = document.createElement("td");
            celdaActividad.innerText = p.Actividad;
            const celdaBoton = document.createElement("td");
            const botonEliminar = document.createElement("button");
            botonEliminar.innerText = "Eliminar participante"

            botonEliminar.addEventListener("click", () => {
                fila.remove()
                if (cuerpo.children.length === 0) {
                    boton.disabled=false
                }
            })

            setTimeout(() => {

                celdaBoton.append(botonEliminar)
                fila.append(celdaParticipante, celdaEdad, celdaActividad, celdaBoton)
                cuerpo.append(fila)
                if (cuerpo.children.length !== 0) {
                    boton.disabled = true
                }
            }, 500 * indice)
        })
    }
}



