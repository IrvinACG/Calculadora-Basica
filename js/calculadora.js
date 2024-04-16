//Instancia de variables
let operacion = document.getElementById('operacion');
let p_array = document.querySelectorAll('p');
let finalizo = true;
//Pintar color de botones
document.addEventListener('DOMContentLoaded', (event) =>{
    for(let p of p_array){
        p.style.background = '#c0d1c2';
    }
});
//Agregar efecto color
for(let p of p_array){
    p.addEventListener('mouseover', (event) =>{
        event.target.style.background = '#ffb884';
    });
    p.addEventListener('mouseleave', (event)=>{
        event.target.style.background = '#c0d1c2';
    });
    p.addEventListener('click', (event)=>{
        let operador = event.target.innerHTML;
        if(operador !== '='){   //Verifica que no sea el operador =
            if(finalizo === false){ //Continua escribiendo operacion
                operacion.value += operador;
            }else{ //Nueva operacion
                if(isNaN(operador)){ //Agrega signo
                    operacion.value = 0 + operador;
                }else{ //Agrega numero
                    operacion.value = operador;
                }
                finalizo = false;
            }
        }

    });
}

/**
 * Funcion que muestra el resultado de la operacion
 */
function resultado(){
    let result;
    try {
        const numeros = operacion.value;
        result = eval(numeros);
    } catch (error) {
        console.log("Error en operacion, error: " + error.message);
        result = 'Error de sintaxis';
    } finally{
        operacion.value = result;
        finalizo = true;
    }
}
/**
 * Funcion que reinicia la operacion a 0
 */
function reiniciar(){
    operacion.value = 0;
    finalizo = true;
}