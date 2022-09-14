// Crear una aplicacion que le solicite al usuario 2 datos,
// el nombre y su color favorito(azul, rojo, verde, amarillo, morado)
// si el color es diferente de alguno de los que mencionamos notificarle al usuario y que recargue la pagina para ingresar
// un color correcto
// crear una funcion que reciba por parametros el nombre del usario y el color
// validar segun el color que recibamos por parametro algo que se relacion con el color
// ejemplo si el color es azul, podriamos poner un console log que nombre de usuario, elegiste el azul, como el cielo.

const nombre = prompt('Ingresa tu nombre')
const color = prompt('¿Cuál de los siguientes colores es tu favorito? azul, rojo, verde, amarillo, morado').toLocaleLowerCase()

if(color === 'azul' || color === 'verde' || color === 'amarillo' || color === 'morado'){
    function validarColor(nombreUsuario, colorUsuario){
        if(colorUsuario === 'azul' ){
        console.log('Hola', nombreUsuario, 'elegiste el color', colorUsuario, 'como el cielo')
        }
        else if(colorUsuario === 'rojo' ){
            console.log('Hola', nombreUsuario, 'elegiste el color', colorUsuario, 'como el tomate')
            }
            else if(colorUsuario === 'verde' ){
                console.log('Hola', nombreUsuario, 'elegiste el color', colorUsuario, 'como el cilantro')
                }
                else if(colorUsuario === 'amarillo' ){
                    console.log('Hola', nombreUsuario, 'elegiste el color', colorUsuario, 'como el elote')
                    }
                    else if(colorUsuario === 'morado' ){
                        console.log('Hola', nombreUsuario, 'elegiste el color', colorUsuario, 'como el hongo')
                        }
    }
}
else{
    console.log('Por favor recargue la página e ingrese un color correcto')
}

validarColor(nombre, color)