const formulario = document.getElementById('formulario')
const dbUser = 'Mario'
const dbPassword = '123abc'

function errores(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('hide')
    error.classList.add('error')
    setTimeout(function(){
        error.classList.remove('error')
        error.classList.add('hide')
    },5000)
}
function validar(u,p){
    if(u === '' || p === ''){
        console.log('Por favor ingresa un dato');
        errores('Datos')
    }
    else{
        if(u === dbUser && p === dbPassword){
            console.log('Bienvenido a tu cuenta');
            window.location.href = '/cajero/index2.html'
        }
        else if(u != dbUser){
            console.log('Por favor ingresa tu usuario');
            errores('Usuario')
        }
        else if(p != dbPassword){
            console.log('Por favor ingresa tu contraseña');
            errores('Password')
        }
    }
}
formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    validar(usuario, password)
})


