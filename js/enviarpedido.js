const $form = document.querySelector('#procesar-pago');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '34623184811';
const lista = document.querySelector("ol");


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(async() => {
        let cliente = document.querySelector('#cliente').value
        let correo = document.querySelector('#correo').value
        let lista = document.querySelector('productos')
        let total = document.querySelector('#total').value

        // await localStorage.setItem('test', JSON.stringify([{image: 'ruben', id: 2},{image: 'alejandro', id: 3}]))
        const a = await localStorage.getItem('productos')
        // await localStorage.getItem('test')
        const productos = JSON.parse(a)
        let imagenes = ''

        for( producto of productos ){
            imagenes += `%0A *Producto:* ${producto.titulo} *Cantidad:* ${producto.cantidad} *Sub Total:* ${producto.precio * producto.cantidad}`
        }

        
        
        let message = 'send?phone=' + phone + '&text=*_Gracias por tu compra_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A' + cliente + '%0A*¿Cuál es tu correo?*%0A' + correo + '%0A*Su compra es*' + imagenes + '%0A*Su monto a pagar es de*%0A' + total + ''
        

        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 2000);

});