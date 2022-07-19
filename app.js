let nombreUsuario = prompt("Ingrese su usuario");
    alert("Hola"+" "+nombreUsuario);


let consulta = prompt("Para ingresar a la tienda ingrese la palabra ENTRAR, sino ingrese SALIR")
if (consulta=="ENTRAR" || consulta=="entrar" || consulta=="Entrar"){
alert("Bienvenid@ a nuestra tienda virtual!");
console.log("el usuario" +" "+ nombreUsuario + " " + "ingreso a la tienda");

let precioHelado = 500
let costoEnvio = 100
alert ("El precio del helado es $500");
for (i=0;i<=2;i++){
 let gustos = prompt ("Ingresa los gustos de helado que queres pedir. Podes elegir hasta tres gustos! Ingresa de a uno y presiona enter");
 alert("El gusto que ingresaste fue"+ " " + gustos);

 console.log("El usuario"+" "+nombreUsuario+" "+"ingreso"+" "+ gustos);

 }
function suma (a,b){
    let resultadoSuma = a+b;
    return resultadoSuma;
}
mostrarResultadoSuma = suma(precioHelado, costoEnvio)
 alert ("Gracias por tu pedido! En breve lo enviamos a tu domicilio. El costo de envio es $"+costoEnvio + ". El total de tu compra es $"  + mostrarResultadoSuma);

}
else {
    alert("Hasta luego!");
}

