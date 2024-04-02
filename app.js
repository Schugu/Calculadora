'use strict';

const pantallaValorAnterior = document.querySelector('.valorAnterior');
const pantallaValorActual = document.querySelector('.valorActual');
let botonesNumeros = document.querySelectorAll('.numero');
let botonesOperadores = document.querySelectorAll('.operador');
let botonesAccion = document.querySelectorAll('.botonAccion');
const botonesGeneral = document.querySelectorAll('.boton');

function agregarFuncionalidadBotones () {
    botonesNumeros = Array.from(botonesNumeros);
    botonesOperadores = Array.from(botonesOperadores);
    botonesAccion = Array.from(botonesAccion);

    botonesGeneral.forEach(boton => {
        boton.addEventListener('click', ()=> {
            if (botonesNumeros.includes(boton)) {
                pantallaValorAnterior.textContent += boton.value;
            } else if (botonesOperadores.includes(boton)) {
                pantallaValorAnterior.textContent += boton.value; 
            } else if (botonesAccion.includes(boton)) {
                if (boton.value === '=') {
                    const expresion = pantallaValorAnterior.textContent.trim(); 
                    const soloOperadores = /^[-+*/]+$/.test(expresion);

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
                    if (pantallaValorAnterior.hasChildNodes() === true) {
                        pantallaValorAnterior.textContent = '';
                    }  
                    if (pantallaValorActual.hasChildNodes() === true) {
                        pantallaValorActual.textContent = '';
                    }
                } else if (boton.value === '←') {
                    if (pantallaValorAnterior.lastChild) {
                        pantallaValorAnterior.textContent = pantallaValorAnterior.textContent.slice(0, -1);
                    }
                } 
            }
        });
    });
}

agregarFuncionalidadBotones();
