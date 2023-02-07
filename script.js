const allProducts = document.getElementById("allProducts");

const productos = [
    {id: 1, nombre: "Mate imperial liso", precio: 7000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdNc-E4s3toWAzjBHy8HI0-jN6RkgZPh2Bg&usqp=CAU"},
    {id: 2, nombre: "Mate imperial cincelado", precio: 9000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdNc-E4s3toWAzjBHy8HI0-jN6RkgZPh2Bg&usqp=CAU"}, 
    {id: 3, nombre: "Mate camionero liso", precio: 5500,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdNc-E4s3toWAzjBHy8HI0-jN6RkgZPh2Bg&usqp=CAU"}, 
    {id: 4, nombre: "Mate de madera calden", precio: 4800,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdNc-E4s3toWAzjBHy8HI0-jN6RkgZPh2Bg&usqp=CAU"}, 
    {id: 5, nombre: "Mate camionero cincelado", precio: 7000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdNc-E4s3toWAzjBHy8HI0-jN6RkgZPh2Bg&usqp=CAU"},
    {id: 6, nombre: "Mate imperial premium", precio: 15000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdNc-E4s3toWAzjBHy8HI0-jN6RkgZPh2Bg&usqp=CAU"},
];

let carrito = [];

productos.foreach((product) => {
    const contenido = document.createElement ("div");
    contenido.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $<p>
    `;


    allProducts.append(contenido);

    let comprar = document.createElement ("button");
    comprar.innerText = "comprar";

    contenido.append(comprar);  
});
