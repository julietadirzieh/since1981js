// para establecer la clase producto y diferenciar precios según tela seleccionada
class Producto {
    constructor(tela, precio) {
        this.tela = tela;
        this.precio = parseFloat(precio);
    }
}

//para declarar un array de productos para almacenar objetos con las distintas combinaciones de productos
const productos = [];
productos.push(new Producto("BATISTA LISA", 290));
productos.push(new Producto("BATISTA ESTAMPADA", 350));
productos.push(new Producto("SIMIL LINO", 440));
productos.push(new Producto("POPLIN ESTAMPADO", 440));
productos.push(new Producto("COMBOS", 3900));

// para establecer la clase persona 
class Persona {
    constructor(nombre, mail, telefono) {
        this.nombre = nombre.value;
        this.mail = mail.value;
        this.telefono = parseFloat(telefono.value);
    }
}

// para crear array de las personas ingresadas por el usuario 
const personas = [];


// para establecer la clase pedido, que identifica el nombre y mensaje del usuario junto con la tela y metros cotizados
class Pedido {
    constructor(nombre, metros, tela, mensaje) {
        this.nombre = nombre.value;
        this.metros = metros.value;
        this.tela = tela.value;
        this.mensaje = mensaje.value;
    }
}

// para crear array de los pedidos 
const pedidos = [];
