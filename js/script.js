let stockProductos = [];

fetch("./js/stockProductos.json")
    .then(response => response.json())
    .then(data => {
        stockProductos = data;
        cargarProductos(stockProductos);
    })

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="informacion">
                    <span class="tipo-de-envio">Envio con normalidad</span>
                    <br>
                    <span class="descripcion">${producto.titulo}</span>
                    <span class="precio">$${producto.precio}</span>
                    <span class="envio">Envio gratis</span>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
        `;

        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();
}



botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = stockProductos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(stockProductos);
        }



    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 2500,
        close: false,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #25d266, #25d266)",
            borderRadius: "20px",
            textTransform: "uppercase",
            fontSize: "15px",
        },
        offset: {
            x: 40, 
            y: 80,
        },
        onClick: function () {} 
    }).showToast();
    

    const idBoton = e.currentTarget.id;
    const productoAgregado = stockProductos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}