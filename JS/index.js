// Calculo Precio con Iva

class Producto{
    constructor(nombre, cantidad, precio){
    this.nombre = nombre
    this.cantidad = cantidad
    this.precio = precio
    this.precioConIVA = function(){
        let precioIVA = this.precio * 1.9;
        return "$" + precioIVA+  " " + "iva"
    }
    this.precioConDESCUENTO = function(){
        let precioDESCUENTO = this.precio * 1.9
        if(precioDESCUENTO >= 9000){
            return "$" + (precioDESCUENTO * 0.20) +  " " + "descuento"
        }
        else{
            return "$" + precioDESCUENTO + " " +"Sin descuento"
        }
    }
}
}
const productos=[
    new Producto("producto1", 1, 5000),
    new Producto("producto2", 1, 6000),
    new Producto("producto3", 1, 10000),
    new Producto("producto4", 1, 2000)
]

for(const Producto of productos){
    console.log(Producto.precioConIVA())
    console.log(Producto.precioConDESCUENTO())
    
}

// Calcular el precio  en cuanto a la cantidad de productos
// let NUMERO = parseInt(prompt("Ingrese precio iva"))
// for(let i=0; i<10; i++){
//     let RESULTADO = NUMERO * i
//     console.log(NUMERO + "x" + i + "=" + RESULTADO)
// }

