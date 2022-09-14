// const formulario = document.getElementById('formulario')
// const dbUser = 'Mario'
// const dbPassword = '123abc'



// function errores (tipo){
//     let error = document.getElementById(`error${tipo}`)
//     erorr.classList.remove('hide')
//     error.classList.add('error')
//     setTimeout(function(){
//     erorr.classList.remove('error')
//     error.classList.add('hide')
//     },5000)
// }




// function validar (u,p){
//     if(u === '' || p === ''){
//         console.log('Ingresa un dato por favor')
//         errores('Data')
//     }
//     else{
//         if(u === dbUser && p === dbPassword){
//             console.log('Bienvenido a tu cuenta', dbUser)    
//         }
//         else if(u != dbUser){
//             errores('User')
//         }
//         else if(u != dbPassword){
//             errores('Password')
//             }
//     }
// }



// formulario.addEventListener('submit', function(evento){
//     evento.preventDefault()
//     let user = document.getElementById('user').value
//     let password = document.getElementById('password').value
//     console.log(user)
//     console.log(password)
//     validar(user,password)
//     })




const formulario = document.getElementById('formulario')
const dbUser = 'Mario'
const dbPassword = '123abc'

const crear = (User) => {
    let span = document.createElement('span')
    span.classList.add('lista')
    span.innerHTML = `
    Hola ${User}, bienvenido a tu cuenta
    `
    let render = document.getElementById('render')
    render.appendChild(span)
}

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
            crear(dbUser)
        }
        else if(u != dbUser){
            errores('Usuario')
        }
        else if(p != dbPassword){
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