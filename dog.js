// Si el perro tiene poca comida entonces se dispara una alerta a tu celular

let cantidadMinimaCroquetas = 100;
let cantidadCroquetasAServir= 50;
let cantidadActualCroquetas= 80;

function sirveComida() {
    if(cantidadActualCroquetas < cantidadMinimaCroquetas) {
        alert('Feed me please');
    }
}

let horaActual = '13:00';
let horasUno = '8:00';
let horaDos ='13:00';
let horaTres='19:00';

    if (horaActual == horaDos) {
        alert ('time to feed me tengo hambre'); 
    }
        
    
