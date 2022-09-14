// Var se puede re-declarar siempre
var nombre = 'Mario'
console.log(nombre)
var nombre = 'Joel'
console.log(nombre)
var nombre = 'María'
console.log(nombre)
const edad = '25'
let nombre2 = 'Migue'


// Let no permite re-declararla
let nombrelet = 'Mario'
console.log(nombrelet)
nombrelet = 'Joel'
console.log(nombrelet)


// Const no permite re-declararla
const nombreconst = 'Raul'
console.log(nombreconst)



//funciones
function saludar(){
    console.log(edad)
    console.log(nombre2)
    console.log(edad)
}
//Se tiene que mandar llamar a la función
saludar()


// Concatenar con +
console.log('Mi nombre es ' + nombre2 + ' y tengo ' + edad + ' de edad')

// Concatenar con ,
console.log('Mi nombre es' , nombre2 , 'y tengo' , edad , 'de edad')

// Concatenar con constantes
const nombre3 = 'Mario'
const pais = 'Mexico'
const gen = '19'

console.log ('Bienvido', nombre, 'de', pais, 'de la generación', gen)