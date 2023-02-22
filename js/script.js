let stockProductos = [
                    // MATES 
    {
        id: "Mate imperial liso",
        titulo: "Mate imperial liso",
        imagen: "./fotos/mates/mate-imperial-liso.jpeg",
        categoria: {
            nombre: "mates",
            id: "mates",
        },
        precio: 7000,
    },
    {
        id: "Mate imperial cincelado",
        titulo: "Mate imperial cincelado",
        imagen: "./fotos/mates/mateimperialcincelado.jpeg",
        categoria: {
            nombre: "mates",
            id: "mates",
        },
        precio: 9000,
    },
    {
        id: "Mate imperial premium",
        titulo: "Mate imperial premium",
        imagen: "./fotos/mates/mateimperialpremium.png",
        categoria: {
            nombre: "mates",
            id: "mates",
        },
        precio: 12000,
    },
    {
        id: "Mate camionero cincelado",
        titulo: "Mate camionero cincelado",
        imagen: "./fotos/mates/mate-camionero-cincelado.jpeg",
        categoria: {
            nombre: "mates",
            id: "mates",
        },
        precio: 7500,
    },
    {
        id: "Mate camionero liso",
        titulo: "Mate camionero liso",
        imagen: "./fotos/mates/mate-camionero-liso.jpeg",
        categoria: {
            nombre: "mates",
            id: "mates",
        },
        precio: 6000,
    },
    {
        id: "Mate madera calden",
        titulo: "Mate madera calden",
        imagen: "./fotos/mates/mate-madera-calden.jpeg",
        categoria: {
            nombre: "mates",
            id: "mates",
        },
        precio: 5000,
    },

                    // BOMBILLAS

    {
        id: "Pico loro alpaca cincelada",
        titulo: "Pico loro alpaca cincelada",
        imagen: "./fotos/bombillas/picoloroalpaca.jpeg",
        categoria: {
            nombre: "bombillas",
            id: "bombillas",
        },
        precio: 3800,
    },
    {
        id: "Pico loro lisa",
        titulo: "Pico loro lisa",
        imagen: "./fotos/bombillas/picolorolisa.jpg",
        categoria: {
            nombre: "bombillas",
            id: "bombillas",
        },
        precio: 3200,
    },
    {
        id: "Bombillon pico bronce cincelada",
        titulo: "Bombillon pico bronce cincelada",
        imagen: "./fotos/bombillas/bombillonpicobronce.jpg",
        categoria: {
            nombre: "bombillas",
            id: "bombillas",
        },
        precio: 4500,
    },
    {
        id: "Bombillon liso pico alpaca",
        titulo: "Bombillon liso pico alpaca",
        imagen: "./fotos/bombillas/bombillonlisopicoalpaca.png",
        categoria: {
            nombre: "bombillas",
            id: "bombillas",
        },
        precio: 4000,
    },
    {
        id: "Bombillon alpaca cincelada sin pico",
        titulo: "Bombillon alpaca cincelada sin pico",
        imagen: "./fotos/bombillas/bombillonalpacasinpico.jpeg",
        categoria: {
            nombre: "bombillas",
            id: "bombillas",
        },
        precio: 4200,
    },

                    // YERBAS
    
    {
        id: "Yerba canarias",
        titulo: "Yerba canarias",
        imagen: "./fotos/yerbas/yerbacanarias.jpg",
        categoria: {
            nombre: "yerbas",
            id: "yerbas",
        },
        precio: 1700,
    },
    {
        id: "Yerba rei verde",
        titulo: "Yerba rei verde",
        imagen: "./fotos/yerbas/yerbareiverde.jpg",
        categoria: {
            nombre: "yerbas",
            id: "yerbas",
        },
        precio: 1500,
    },
    {
        id: "Yerba la pampa",
        titulo: "Yerba la pampa",
        imagen: "./fotos/yerbas/yerbapampa.jpg",
        categoria: {
            nombre: "yerbas",
            id: "yerbas",
        },
        precio: 1000,
    },

                    // SET MATERO
    
    {
            id: "Set matero marron",
            titulo: "Set matero marron",
            imagen: "./fotos/setmatero/setmatero1.jpg",
            categoria: {
                nombre: "setmatero",
                id: "setmatero",
            },
            precio: 3000,
    },
    {
        id: "Set matero rosa",
        titulo: "Set matero rosa",
        imagen: "./fotos/setmatero/setmatero2.jpg",
        categoria: {
            nombre: "setmatero",
            id: "setmatero",
        },
        precio: 3100,
    },
    {
        id: "Set matero negro",
        titulo: "Set matero negro",
        imagen: "./fotos/setmatero/setmatero3.jpg",
        categoria: {
            nombre: "setmatero",
            id: "setmatero",
        },
        precio: 3400,
    },
    ];

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

cargarProductos(stockProductos);
    
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

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = stockProductos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else {
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

