const allProductos = document.getElementById('allProductos');
const carritoCompras = document.getElementById('carritoCompras');
const modalContainer = document.getElementById('modal-Container');
const cantidadCarrito = document.getElementById('cantidadCarrito');


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

stockProductos.forEach((producto) => {
    const contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML = `
    <img src=${producto.img}>
    <span class="tipo-de-envio">Envio con normalidad</span>
    <span>${producto.nombre}</span>
    <span class="precio">$ ${producto.precio} </span>
    <span class="envio">Envio gratis</span>
    `;
    allProductos.append(contenido);


    let comprar = document.createElement ("button");
    comprar.innerText = "comprar";
    comprar.classname = "comprar";

    contenido.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
        console.log(repeat)

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad += 1;
                }
            });
        } else {
            carrito.push({
            id : producto.id,
            img : producto.img,
            nombre : producto.nombre,
            precio : producto.precio,
            cantidad : producto.cantidad,
            });
            console.log(carrito);
            carritoCounter();
            saveLocal();
        }
    });    
});


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify (carrito));
};


JSON.parse(localStorage.getItem("carrito"));

