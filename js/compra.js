const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito')
// const procesarCompraBtn = document.getElementById('procesar-compra')
const procesarCompraBtn = document.getElementById('submit')
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });

}

function procesarCompra(e){
    e.preventDefault();
    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay productos selecciona uno.',
            timer: 2000,
            showConfirmButton: false,
          }).then(function(){
            window.location = "index.html"
          })
    }
    else if(cliente.value === '' || correo.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Lo siento...',
            text: 'Complete los campos.',
            timer: 2000,
            showConfirmButton: false,
          })
    }
    else {
        const cargandoGif = document.querySelector('#cargando')
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = 'img/mail.gif';
        enviado.style.display = 'block'
        enviado.width = '150px'

        setTimeout(() => {
            cargandoGif.style.display = 'none'
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = "index.html";
            }, 2000);
        }, 3000);
    }
}