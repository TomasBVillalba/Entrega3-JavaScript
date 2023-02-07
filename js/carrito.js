const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((producto) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modal-contenido";
        carritoContenido.innerHTML = `
            <img src=${producto.img}>
            <span>${producto.nombre}</span>
            <span>$ ${producto.precio} </span>
            <span class="restar"> - </span>
            <span> Cantidad: ${producto.cantidad}</span>
            <span class="sumar"> + </span>
            <span> Total: $ ${producto.precio * producto.cantidad}</span>
            `;

        modalContainer.append(carritoContenido);


        let restar = carritoContenido.querySelector(".restar");

        restar.addEventListener("click", () => {
            if (producto.cantidad !== 1) {
                producto.cantidad --;
        }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContenido.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            producto.cantidad ++;
            saveLocal();
            pintarCarrito();
        });


        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "eliminar-producto";
        carritoContenido.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido";
    totalCompra.innerHTML = ` Total de la compra: $ ${total};`
    modalContainer.append(totalCompra)

};

carritoCompras.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        
        
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const  carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify (carritoLength));

    cantidadCarrito.innerText = JSON.parse (localStorage.getItem("carritoLength"));
}

carritoCounter();