let saldoActual = 10000


document.getElementById("renderSaldo").innerHTML = `
    Saldo $${saldoActual} USD
    `

// document.querySelector('#consultar').addEventListener('click',()=>{
//     console.log(saldoActual)
//     document.getElementById("renderSaldo").innerHTML = `
//     Tu saldo es ${saldoActual}
//     `
// })

document.querySelector('#depositar').addEventListener('click',()=>{
    let nuevodeposito = Number(document.getElementById('deposito').value)
    // console.log(nuevodeposito)
    console.log(saldoActual = saldoActual + nuevodeposito)
    document.getElementById("renderDeposito").innerHTML = `
    Depositaste $${nuevodeposito} USD
    `
    document.getElementById("renderSaldo").innerHTML = `
    Saldo $${saldoActual} USD
    `
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.getElementById("historial").innerHTML = `
    En ${dateTime} depositaste $${nuevodeposito} USD
    `
})

document.querySelector('#retirar').addEventListener('click',()=>{
    let nuevoRetiro = Number(document.getElementById('retiro').value)
    // console.log(nuevoRetiro)
    
        document.getElementById("renderRetiro").innerHTML = `
        Saldo insuficiente
        `    

    console.log(saldoActual = saldoActual - nuevoRetiro)
    document.getElementById("renderRetiro").innerHTML = `
    Retiraste ${nuevoRetiro}
    `
    document.getElementById("renderSaldo").innerHTML = `
    Saldo $${saldoActual} USD
    `
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.getElementById("historial").innerHTML = `
    En ${dateTime} retiraste $${nuevoRetiro} USD
    `
})




document.querySelector('#exit').addEventListener('click',()=>{
    window.location.href = '/cajero/index.html'
})