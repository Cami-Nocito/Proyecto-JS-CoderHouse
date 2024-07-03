//Pedido de nombre nombre

let nombre = prompt("Ingresa tu nombre")
const persona1 = { nombre }
if (nombre == "") {
    alert("No has ingresado un nombre");
    prompt("Ingresa un nombre para continuar")
}
else {
    alert("Bienvenido " + nombre)
    console.log("Su nombre es" + nombre)
}


//Calcular edad para ingresar

const Anio1 = 2024
const MayorDeEdad = 18
let Anio2 = parseFloat(prompt("Por favor, introduzca su año de nacimiento"));
function restar(a, b) {
    return a - b;
}

let resultado = restar(Anio1, Anio2)
alert("Tienes " + resultado + " años")
console.log("Su edad es: " + resultado)

if (resultado < MayorDeEdad) {
    alert("Perdón, necesitas tener la mayoría de edad para continuar")
    let = nuevaSolicitud = prompt("Ingresa tu año de nacimiento");
}
else {
    alert("Puedes continuar")
    console.log("Tiene la mayoría de edad")
}

let ListaDeCompra = prompt("Qué productos desea comprar?:" + ListaDeProductos)
alert("Usted ha comprado " + ListaDeCompra)

//Creación del Array para la lista de productos
let ListaDeProductos = [
    { producto: "Sal", precio: 500 }, 
    { producto: "Perejil en polvo", precio: 400 },
    { productos: "Romero", precio: 300 },
    { productos: "Condimento para Pizza", precio: 350 },
    { productos: "Oregano", precio: 350 }
];

console.log("Array original:", ListaDeCompra);
let jsonString= JSON.stringify(ListaDeProductos)


//Agregar elementos a la lista
ListaDeCompra.push({ producto: "Provenzal", precio: 150});
ListaDeCompra.push({ producto: "Tomillo", precio: 350});
//Mostrar la lista de compras
console.log("Lista de compras:", ListaDeCompra); 

ListaDeCompra.forEach(function(item){
    console.log('${item.producto}: $${item.precio.toFixed (2)}');
});

//Calcular el total de la compra
let total=ListaDeCompra.reduce(function(acumulador, item){
    return acumulador + item.precio;
}, 0);

console.log('Total de la compra: $${total.toFixed(2)}');



function sumar(a, b) {
    return a + b
}
let Compra = sumar()









