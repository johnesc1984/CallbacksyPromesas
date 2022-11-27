//callback 1 
// function multiplicaPorSiMismo(valor, ejecuta) {
//     console.log(`Inicia ejecución: el Valor es = ${valor}`)
//     setTimeout(function () {
//         ejecuta(valor, valor * valor);
//         //ejecuta(2,2*2)
//     }, 1000)
// }

// multiplicaPorSiMismo(2, function (valor, resultado) {
//     console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
// })
// console.log('Procesando')


function multiplicaPorSiMismo(valor) {
    console.log('EJERCICIO 1 ')
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    console.log('Procesando')
    return new Promise(resolve => {
        setTimeout(function () {
            resolve([valor, valor * valor])
        }, 1000)
    });

}


multiplicaPorSiMismo(2).then( resultado => {
   
    console.log(`Finaliza con el valor = ${resultado[0]} y el resultado = ${resultado[1]}`)
}).then(() => {



//callback 2
// function asincrono(valor, ejecucion) {
//     console.log(`Inicia ejecución: el Valor es = ${valor}`)
//     setTimeout(function () {
//         ejecucion(valor, valor * valor)
//     }, 0 | Math.random() * 100)

// }
// var max = 10;
// var cnt = 0;
// for (var i = 0; i < max; i++) {
//     asincrono(i, function (valor, resultado) {
//         console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
//         if (++cnt === max) {
//             console.log('Éxito')
//         }
//     });
// }


function asincrono(valor) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    return new Promise(resolve => {
        setTimeout(function () {
            resolve([valor, valor * valor])
        }, 0 | Math.random() * 100)
    })
}

console.log('EJERCICIO 2 ')
var max = 10;
var cnt = 0;
for (var i = 0; i < max; i++) {

    asincrono(i).then(respuesta => {
        console.log(`Finaliza con el valor = ${respuesta[0]} y el resultado = ${respuesta[1]}`)
        if (++cnt === max) {
            console.log('Éxito')
        }
    })

}

}).then(() => {
     console.log("EJERCICIO 3")
    // Pepe ya tiene conocimientos sólidos de programación y desea probarse así mismo
    // realizando la promesa de su rutina diaria. Para ello, cada 2 segundos se debe ejecutar
    // una nueva promesa con su siguiente tarea a realizar en su rutina diaria.
    // Su rutina es la siguiente:
    // 06:00am se despierta
    // Error( No suena el despertador)
    // 07:00am se alista y sale a coger Transmilenio
    // Error(paro en el portal y no pude coger transporte)
    // 08:15 am entra a estudiar
    // Error(llega tarde y no puede entrar a clases)
    // 12:00 sale del estudio y almuerza
    // Error(no puede almorzar porque le sale un pelo en la sopa)
    // 01:00pm va a trabajar en Bellatrix
    // Error(Se olvida del carnet y no lo dejan ingresar)
    // 08:00pm sale del trabajo a relajarse con sus compañeros de trabajo
    // Error(Lo roban)
    // 11:00pm vuelve a casa
    // Error(Ha perdido las llaves de su casa y le toca dormir en el parque)
    // 01:00am se acuesta para ver Netflix.
    // Error(Olvido pagar la mensualidad de Netflix... se desbarata la cama y no tiene donde
    // dormir)


    //se crea sistema aleatorio de tareas que genera resolve o reject de manera aleatoria cada 2 segundos

    let tareas = [
        {hora:"06:00am",tarea:"se despierta",error:"No suena el despertador"},
        {hora:"07:00am",tarea:"se alista y sale a coger Transmilenio",error:"paro en el portal y no pude coger transporte"},
        {hora:"08:15am",tarea:"entra a estudiar",error:"llega tarde y no puede entrar a clases"},
        {hora:"12:00pm",tarea:"sale del estudio y almuerza",error:"no puede almorzar porque le sale un pelo en la sopa"},
        {hora:"01:00pm",tarea:"va a trabajar en Bellatrix",error:"Se olvida del carnet y no lo dejan ingresar"},
        {hora:"08:00pm",tarea:"sale del trabajo a relajarse con sus compañeros de trabajo",error:"Lo roban"},
        {hora:"11:00pm",tarea:"vuelve a casa",error:"Ha perdido las llaves de su casa y le toca dormir en el parque"},
        {hora:"01:00am",tarea:"se acuesta para ver Netflix.",error:"Olvido pagar la mensualidad de Netflix... se desbarata la cama y no tiene donde dormir"},
    ]

    var iterador = 0;
    var estadotarea = ['error','ok'];

     function EjecutarTareas(actividad) {
        return new Promise((resolve,reject) => {
            iterador = iterador + 2
            setTimeout(function () {
                var estadoaleatorio = Math.floor(Math.random() * (1 - 0 + 1) + 0)
                if(estadoaleatorio == 1){
                    resolve({tarea:actividad.tarea,hora:actividad.hora})
                }
                else{
                    reject({error:actividad.error,hora:actividad.hora})
                }
               
            }, 2000 * iterador)
        })
    }


    for (var i = 0; i < tareas.length; i++) {
         EjecutarTareas(tareas[i]).then(resOk => {
            console.log(`Hora: ${resOk.hora} Tarea: ${resOk.tarea}`)
          }, resError => {
            console.log(`Hora: ${resError.hora} Error: ${resError.error}`)
          });
    }


})




