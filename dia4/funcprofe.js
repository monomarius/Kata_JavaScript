const nombre = prompt('Ingresa tu nombre')
const edad = Number(prompt('Ingresa tu edad'))
const examen = prompt('Aprobaste el examen de manejo?').toLocaleLowerCase()
const vista = Number(prompt('De 1 a 10, que tan bien miras?'))
console.log(nombre, edad, examen, vista)
function validar(nombreUsuario, edadUsuario, examenUsuario, vistaUsuario){
    if(edadUsuario >= 18){
        if(examenUsuario === 'si' && vistaUsuario === 10){
            console.log('Felicidades', nombreUsuario, 'Obtuviste tu licencia de conducir')
            return true
        }
        else{
            console.log('No pasaste los filtros')
            return false
        }
    }
    else if(edadUsuario < 18){
        console.log('Lo sentimos, no puedes obtener tu licencia')
        return false
    }
}
const resultado = validar(nombre, edad, examen, vista)
function comprar (boolean){
    if(boolean === true){
        console.log('Puedes comprar un vehiculo')
    }
    else{
        console.log('Lo sentimos pero no puedes comprar ningun vehiculo')
    }
}
comprar(resultado)