$(document).ready(() => {
    //para ocultar el formulario y hacerlo aparecer cuando apreten el boton de cotizar
    $("#formulario").hide();

    //para limpiar el cotizador 
    $("#limpiarCotizador").click(function (e) {
        $("#cotizar").fadeOut(500);
    });

    //para que quienes no quieran cotizar, llenen el formulario directamente 
    $("#consulta").click(function (e) {
        //para cancelar el comportamiento de evento 
        e.preventDefault();
        //para esconder el boton y mostrar el formulario 
        $("#consulta").hide();
        $("#formulario").show();
    });

    //para asociar el evento click al cotizador
    $("#enviarCotizador").click(function (e) {
        //para cancelar el comportamiento de evento 
        e.preventDefault();

        //para limpiar el cotizador cada vez que se cotice 
        $(".divQueCotiza").html("");

        // para conocer el precio original correspondiente, dependiendo la tela seleccionada
        if (tela.value === productos[0].tela) {
            precioOriginal = multiplicar(metros.value, productos[0].precio);
        } else if (tela.value === productos[1].tela) {
            precioOriginal = multiplicar(metros.value, productos[1].precio);
        } else if (tela.value === productos[2].tela) {
            precioOriginal = multiplicar(metros.value, productos[2].precio);
        } else if (tela.value === productos[3].tela) {
            precioOriginal = multiplicar(metros.value, productos[3].precio);
        } else if (tela.value === productos[4].tela) {
            precioOriginal = multiplicar(metros.value, productos[4].precio);
            //para definir e insertar el innerHTML del elemento con una plantilla de texto. 
            //se pone por separado porque este producto no tiene descuento, sin importar la cantidad que se cotice.
            $("#cotizar").append(`<div class=divQueCotiza><h3>Precio total sin IVA:$${precioOriginal}.</h3>
                        <h2 class=fadeOut>Complete los datos del formulario para continuar con la compra.</h2></div>`);
            //para declarar métodos encadenados, de animacion y de css
            $(".fadeOut").css("font-weight", "bold")
                .fadeOut(1000)
                .fadeIn(2000);
            $("#consulta").hide();
            $("#formulario").show();
        }

        // para conocer el precio con descuento, dependiendo los metros seleccionados
        // para solicitar que completen los dos datos para poder cotizar
        if ((metros.value === ("")) || (tela.value === (""))) {
            //para definir e insertar el innerHTML del elemento con una plantilla de texto
            $("#cotizar").append(`<div class=divQueCotiza><h3>Ingrese los datos solicitados para poder cotizar su compra.</h3></div>`);

        } else if ((metros.value < 30) && (tela.value !== productos[4].tela)) {
            let precioFinal = precioOriginal;
            //para definir e insertar el innerHTML del elemento con una plantilla de texto
            $("#cotizar").append(`<div class=divQueCotiza><h3>Precio total sin IVA:$${precioFinal}.</h3>
                                <h2 class=fadeOut>Complete los datos del formulario para continuar con la compra.</h2></div>`)
            //para declarar métodos encadenados, de animacion y de css
            $(".fadeOut").css("font-weight", "bold")
                .fadeOut(1000)
                .fadeIn(2000);
            $("#consulta").hide();
            $("#formulario").show();

        } else if (((metros.value >= 30) && (metros.value < 50)) && (tela.value !== productos[4].tela)) {
            let precioFinal = resta(precioOriginal, multiplicar(precioOriginal, 0.10));
            //para definir e insertar el innerHTML del elemento con una plantilla de texto
            $("#cotizar").append(`<div class=divQueCotiza><h3>Precio total sin IVA:$${precioFinal}.</h3>
                                <h2 class=fadeOut>Complete los datos del formulario para continuar con la compra.</h2></div>`);
            //para declarar métodos encadenados, de animacion y de css
            $(".fadeOut").css("font-weight", "bold")
                .fadeOut(1000)
                .fadeIn(2000);
            $("#consulta").hide();
            $("#formulario").show();

        } else if (((metros.value >= 50)) && (tela.value !== productos[4].tela)) {
            let precioFinal = resta(precioOriginal, multiplicar(precioOriginal, 0.15));
            //para definir e insertar el innerHTML del elemento con una plantilla de texto
            $("#cotizar").append(`<div class=divQueCotiza><h3>Precio total sin IVA:$${precioFinal}.</h3>
                                <h2 class=fadeOut>Complete los datos del formulario para continuar con la compra.</h2></div>`);
            //para declarar métodos encadenados, de animacion y de css
            $(".fadeOut").css("font-weight", "bold")
                .fadeOut(1000)
                .fadeIn(2000)
            $("#consulta").hide();
            $("#formulario").show();
        }

    });

});

