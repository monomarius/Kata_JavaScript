// console.log ('hola desde funciones')

// function sumar (n1,n2){
//     let total = n1 + n2
//     console.log(total)
// }
// sumar(5,3)


// function imprimirtabla(numero){
//     console.log('Inicia el bucle')
//     const tabla = numero
    
//     for(let contadorFor = 0; contadorFor <= 10; contadorFor++){
//     let resultado = tabla * contadorFor
//     console.log(tabla, 'x', contadorFor, '=', resultado)
//     }

//     console.log('Terminó el bucle')
// }

// imprimirtabla(2)
// imprimirtabla(3)


const nombre = prompt('Ingresa tu nombre')
const edad = Number(prompt('Ingresa tu edad'))
const examen = prompt('¿Aprobaste el examen de manejo').toLocaleLowerCase()
const vista = Number(prompt('De 1 a 10, ¿qué tan bien ves?'))

console.log(nombre, edad, examen, vista)

function validar(nombreUsuario, edadUsuario, vistaUsuario)
{
    if(edadUsuario >= 18)
    {
        if(examenUsuario == 'si' && vistaUsuario >= 8)
        {
            console.log('Felicidades', nombreUsuario, 'obtuviste tu licencia')
        }
        else
        {
            console.log('No pasaste los filtros')
            return false
        }
    }
    else if(edadUsuario < 18)
    {
        console.log('Lo sentimos no puedes obtener tu licencia')
        return false
    }
}

const resultado = validar(nombre, edad, examen, vista)

console.log(resultado)