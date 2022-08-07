class Producto {
    constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    }
    sumaIva() {
    this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("transferencia1", "200"));
productos.push(new Producto("transferencia2", "150"));
productos.push(new Producto("transferencia3", "500"));
   
for (const producto of productos){
   producto.sumaIva();
}

console.log(productos);