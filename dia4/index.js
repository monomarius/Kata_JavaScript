function marcador ()
{
    let partido1 = 3
    let partido2 = 3
    function agregar()
    {
        let nombre = 'Gabo'
        console.log(nombre, 'anotó', (partido1 + partido2), 'goles')
    }
    return agregar()
}


console.log('Inicia el bucle')
const tabla = 5
for(let contadorFor = 0; contadorFor <= 10; contadorFor++){
    let resultado = tabla * contadorFor
    console.log(tabla, 'x', contadorFor, '=', resultado)
    if (contadorFor === 4){
        console.log('Soy un 4')
    }
    else if (contadorFor === 8){
        console.log('Soy un 8')
    }
}
console.log('Terminó el bucle')


