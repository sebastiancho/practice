let nomb = prompt('dame tu nombre');
let nomb2 = prompt('dame tu apellido');


function sumar(nomb, nomb2){
    let suma = nomb + nomb2;
    return suma;
}

document.write(sumar(nomb, nomb2));


const sumanombre = (nomb, nomb2) => {
    return (nomb + nomb2);
}

document.write(' '+ sumanombre(nomb, nomb2));


const ImprimirFrase = nombre =>' '+`hola ${nombre}`; 
let nombre = 'sebastian';

document.write(ImprimirFrase (nombre));

const carro ={
    color:'azul',
    marca: 'nissan',
    funciones:{
        acelera:160,
        frena:0,
    }
}

document.write(' '+carro.color);
document.write(' '+carro.marca);