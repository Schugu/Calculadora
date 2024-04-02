'use strict';

// Declaracion de variables.
const pantallaValorAnterior = document.querySelector('.valorAnterior');
const pantallaValorActual = document.querySelector('.valorActual');
let botonesNumeros = document.querySelectorAll('.numero');
let botonesOperadores = document.querySelectorAll('.operador');
let botonesAccion = document.querySelectorAll('.botonAccion');
const botonesGeneral = document.querySelectorAll('.boton');

function agregarFuncionalidadBotones () {
    // Convierto los objetos en arrays para poder iterar sobre ellos.
    botonesNumeros = Array.from(botonesNumeros);
    botonesOperadores = Array.from(botonesOperadores);
    botonesAccion = Array.from(botonesAccion);

    // Itero sobre los botones
    botonesGeneral.forEach(boton => {
        boton.addEventListener('click', ()=> {
            // Si botonesNumeros incluye el botón entonces hacer algo.
            if (botonesNumeros.includes(boton)) {
                // Sumar el valor del boton al texto contenido en pantallaValorAnterior
                pantallaValorAnterior.textContent += boton.value;
            } else if (botonesOperadores.includes(boton)) {
                pantallaValorAnterior.textContent += boton.value; 
            } else if (botonesAccion.includes(boton)) {
                // Acciones especiales para los botones especiales.
                if (boton.value === '=') {
                    // Declaro variables para el error.
                    const expresion = pantallaValorAnterior.textContent.trim(); 
                    const soloOperadores = /^[-+*/]+$/.test(expresion);

                    // Tirar error si se trata de introducir esto.
                    if (expresion === '' || soloOperadores) {
                        pantallaValorActual.textContent = 'Sintax Error';
                    } else {
                        try {
                            pantallaValorActual.textContent = eval(expresion);
                        } catch {
                            pantallaValorActual.textContent = 'Sintax Error';
                        }
                    }
                } else if (boton.value === 'C') {
                    // Esto para que el boton borrar, borre XD todo (Si existe algo en el contenedor).
                    if (pantallaValorAnterior.hasChildNodes() === true) {
                        pantallaValorAnterior.textContent = '';
                    }  
                    if (pantallaValorActual.hasChildNodes() === true) {
                        pantallaValorActual.textContent = '';
                    }
                } else if (boton.value === '←') {
                    // Esto es para ir borrando de a un elemento.
                    if (pantallaValorAnterior.lastChild) {
                        pantallaValorAnterior.textContent = pantallaValorAnterior.textContent.slice(0, -1);
                    }
                } 
            }
        });
    });
}

// Llamo a la función. 
agregarFuncionalidadBotones();
