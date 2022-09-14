var index = 0
while(index < 11){
    console.log(index)
    index++
    }

// var arreglo = []
// var userInput
// while (!(userInput==""))
//     {
//         userInput
//     }

var contador = 0
do {
    contador++
    console.log('Conteo: ' + contador)
}
while (contador < 10)


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



console.log('Inicia el bucle Fizz & Buzz')
for (let contadorForFizz = 0; contadorForFizz<=100; contadorForFizz++){

if (contadorForFizz % 3 == 0 && contadorForFizz % 5 == 0){
    console.log('FIZZBUZZ')
}
else if (contadorForFizz % 3 == 0)
{
    console.log('FIZZ')
}

else if (contadorForFizz % 5 == 0){
    console.log('BUZZ')
}
else {
    console.log(contadorForFizz)
}
}
console.log('Termina el bucle Fizz & Buzz')


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