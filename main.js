let operador = "";
let resultado = "";
let dark = false;
let error = "Math Error";


//NUMERO DEL 0 AL 9
function pulsarTeclaNum(botonNumero){
    let numero = botonNumero.textContent;
    resultado += numero;
    mostrarPantalla(resultado);
    return resultado;
}

//OPERADORES (+,-,*,/,%)
function pulsarTeclaOperador(botonOperador){
    let operador = botonOperador.textContent;
    resultado += operador;
    operador = "";
    document.querySelector("#pantalla").textContent = operador;
    return resultado;
}

// TECLA =
function pulsarTeclaIgual(){
    try{
        if (resultado.includes("exp")){
            resultado = eval(resultado.replace("exp", "*10**"));
        }
        resultado = eval(resultado);
        mostrarPantalla(resultado);

    } catch (err) {
        document.querySelector("#pantalla").textContent = error;
    }
    return resultado;  
}

//OPERADOR EXP
//TECLA SEN
function pulsarTeclaSen(){
    resultado = eval(Math.sin(resultado));
    mostrarPantalla(resultado);
}

//TECLA COS
function pulsarTeclaCos(){
    resultado = eval(Math.cos(resultado));
    mostrarPantalla(resultado);
}

//TECLA COS
function pulsarTeclaTan(){
    resultado = eval(Math.tan(resultado));
    mostrarPantalla(resultado);
}

//TECLA RAIZ
function pulsarTeclaRaiz(){ //RAICES NEGATIVAS
    resultado = eval(Math.sqrt(resultado));
    mostrarPantalla(resultado);
}

//TECLA LOGARITMO
function pulsarTeclaLog(){
    resultado = eval(Math.log10(resultado));
    mostrarPantalla(resultado);
}

//TECLA LOGARITMO NEPERIANO
function pulsarTeclaLogNep(){
    resultado = eval(Math.log(resultado));
    mostrarPantalla(resultado);
}

// TECLA C
function pulsarTeclaBorrado(){
    resultado = "";
    document.querySelector("#pantalla").textContent = "0";
}

//TECLA <-
function pulsarTeclaBorradoProgresivo(){
    resultado = String(resultado);
    resultado = resultado.slice(0, resultado.length-1);
    mostrarPantalla(resultado);
    return resultado;
}

function mostrarPantalla(resultado){
    resultado = String(resultado);
    if (resultado == "NaN"){
        document.querySelector("#pantalla").textContent = "Math Error";
    } else {
        document.querySelector("#pantalla").textContent = resultado;
    }
}

/***********************************MODO OSCURO***********************************/
function cambiarModo(){
    const cajaTabla = document.querySelector("#caja_tabla");
    const cuerpo = document.body;
    const tituloPrincipal = document.querySelector("#titulo_calculadora");
    const botonModo = document.querySelector("#boton_modo");
    const fondoBoton = document.querySelector("#fondo_boton");

    if (!dark){
        cajaTabla.style.backgroundColor = "#282C34";
        cajaTabla.style.color = "#fff";
        cuerpo.style.background = "radial-gradient(circle, #0f4a80 0%, #10062c 100%)";
        tituloPrincipal.style.color = "#fff";
        botonModo.style.backgroundImage = "url(img/modo-claro.png)"
        fondoBoton.style.paddingLeft = "1.4rem";
        dark = true;
    } else {
        cajaTabla.style.backgroundColor = "#fff";
        cajaTabla.style.color = "black";
        cuerpo.style.background = "radial-gradient(circle, #f9f8e3 6%, #FFF55C 100%)";
        tituloPrincipal.style.color = "black";
        botonModo.style.backgroundImage = "url(img/modo-nocturno.png)"
        fondoBoton.style.paddingLeft = "0rem";
        dark = false;
    }
}