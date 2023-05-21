const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')
const cantidadProducto = document.querySelector('.count-product');
const procesarPedidoBtn = document.getElementById('procesar-pedido');
let contador = document.querySelector('.count-product');

let countProduct = 0;

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>(carro.comprarProducto(e)));

    carrito.addEventListener('click', (e)=>(carro.eliminarProducto(e)));

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)})
}