// Mandamos a traer nuestros elementos del DOM
const divisa = document.getElementById('divisa')
const render = document.querySelector('#render')
const moneda = document.getElementById('moneda')
const renderMonedas = document.getElementById('renderMonedas')

let divisa = 'dolar'

const calcular = (m, m2) =>{
    if (m === 'Dolar'){
        resultado.innerHTML = `
        ${m2} dolares son = ${(m2 * 19.89).toFixed(2)} Pesos Mexicanos. <br/>
        ${m2} dolares es = ${(m2 * 3.84).toFixed(2)} Soles.
        ${m2} dolares es = ${(m2 * 7.69).toFixed(2)} Quetzales. <br/>
        ${m2} dolares es = ${(m2 * 5.11).toFixed(2)} Reales.
        `
    }
    else if (m === 'Peso'){
        resultado.innerHTML = `
        ${m2} pesos es = ${(m2 * 0.05).toFixed(2)} Dolares. <br/>
        ${m2} pesos es = ${(m2 * 0.19).toFixed(2)} Soles.
        ${m2} pesos es = ${(m2 * 0.39).toFixed(2)} Quetzales. <br/>
        ${m2} pesos es = ${(m2 * 0.26).toFixed(2)} Reales.
        `
    }
    else if (m === 'Sol'){
        resultado.innerHTML = `
        ${m2} soles es = ${(m2 * 0.05).toFixed(2)} Dolares. <br/>
        ${m2} soles es = ${(m2 * 0.19).toFixed(2)} Pesos.
        ${m2} soles es = ${(m2 * 0.39).toFixed(2)} Quetzales. <br/>
        ${m2} soles es = ${(m2 * 0.26).toFixed(2)} Reales.
        `
    }
    else if (m === 'Quetzal'){
        resultado.innerHTML = `
        ${m2} quetzales es = ${(m2 * 0.13).toFixed(2)} Dolares. <br/>
        ${m2} quetzales es = ${(m2 * 0.19).toFixed(2)} Soles.
        ${m2} quetzales es = ${(m2 * 0.39).toFixed(2)} Pesos. <br/>
        ${m2} quetzales es = ${(m2 * 0.26).toFixed(2)} Reales.
        `
    }
    else if (m === 'Real'){
        resultado.innerHTML = `
        ${m2} reales es = ${(m2 * 0.13).toFixed(2)} Dolares. <br/>
        ${m2} reales es = ${(m2 * 0.19).toFixed(2)} Soles.
        ${m2} reales es = ${(m2 * 0.39).toFixed(2)} Pesos. <br/>
        ${m2} reales es = ${(m2 * 0.26).toFixed(2)} Reales.
        `
    }
    }

    // Con esta funcion vamos a renderizar en pantalla la moneda que esta seleccionada
// Inicialmente sera dolar pero cuando se ejecute un cambio en el select
// esto tambien cambiara.
const pintarContenido = (value) => {
    let span = document.getElementById('render')
    span.classList.add('span')
    if(value === 'dolar'){
        span.innerHTML = `Seleccionaste la moneda <strong>dolar</strong>`
    }
    else if(value === 'mx'){
        span.innerHTML = `Seleccionaste la moneda <strong>peso Mexicano</strong>`
    }
    else if(value === 'quetzal'){
        span.innerHTML = `Seleccionaste la moneda <strong>quetzal</strong>`
    }
    else if(value === 'soles'){
        span.innerHTML = `Seleccionaste la moneda <strong>soles</strong>`
    }
    
}
​
 // Con este onChange, detectamos cada vez que haya un cambio en el SELECT
 // para asi saber que moneda eligio el usuario,
select.onchange = (evento) => {
    let value = evento.target.value
    if(value === ''){
        value = null
        console.log(value);
        if(value === null){
            console.log('Selecciona una moneda para continuar');
        }
    }
    else if(value != null){
        // Mandamamos a llamar a la funcion pintar contenido y le pasamos por parametro
        // el value que el usuario selecciono, osea la moneda.
        pintarContenido(value)
        // Actualizamos el valor de nuestra moneda que inicialmente era dolar
        moneda = value
        console.log(value);
    }
    
    
}
​
// Con este Listener vamos a estar pendientes a cuando recibamos un SUBMIT en nuestro
// formulario, para asi convertirlo a numero y poder hacer nuestros calculos.
form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    // Convertimos nuestro string a numero con el metodo Number
    let monto = Number(document.getElementById('monto').value)
    // Llamamos a la funcion calcular y por parametro le pasamos la moneda actualizada
    // y el monto que esta ingresando el usuario
    calcular(moneda, monto)
})