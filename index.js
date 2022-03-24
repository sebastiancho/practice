let calif1 = parseInt(prompt("dame 1 numero"));
let calif2 = parseInt(prompt("dame 1 numero"));
let calif3 = parseInt(prompt("dame 1 numero"));

let promedio = (calif1+calif2+calif3)/3;



if (promedio >= 8){
    document.write(promedio+' '+"felicidades estas aprobado")
}else{
    document.write(promedio+' '+"suerte para la otra, no estas aprobado")
}