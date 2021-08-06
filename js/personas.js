$(document).ready(() => {
  //para limpiar los valores del formulario al hacer click
  $(".botonLimpiar").click(function (e) {
    $("#formulario").val("");
  });

  //para asociar el evento submit al formulario
  $("#formulario").submit(function (e) {

    //para cancelar el comportamiento del evento
    e.preventDefault();
    // para agregar al array de las personas ingresadas por el usuario 
    personas.push({ nombre: nombre.value, mail: mail.value, telefono: telefono.value });
    // para agregar al array de los pedidos ingresados por el usuario 
    pedidos.push({ nombre: nombre.value, metros: metros.value, tela: tela.value, mensaje: mensaje.value });
    //para declarar la información a enviar a ajax
    const infoPost = pedidos[pedidos.length - 1];

    //para ejecutar ajax y usar el metodo post
    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: infoPost,
      success: function (data) {
        console.log("Esta es la data de ajax", data);

        //para que se mande un mensaje final de confirmacion al usuario
        $("#mensajeFinal").append(`<h4>¡Gracias ${data.nombre}!</h4>
    <h6>Dentro de las próximas 48hs hábiles nos comunicaremos con Usted para continuar con la siguiente compra:</h6>
    <strong><p>METROS: ${data.metros}</p>
    <p>TELA: ${data.tela}</p>
    <p>MENSAJE: ${data.mensaje}</p>`);
      }
    });

    //para limpiar el cotizador cada vez que se cotice y darle estilos con css al mensaje
    $("#mensajeFinal").html("")
      .css({
        "margin": "0 auto",
        "width": "50%",
        "border": "1px solid #CCC",
        "border-radius": "1em",
        "text-align": "center",
        "margin-bottom": "30px"
      });

    //para ocultar el cotizador y formulario, y confirmar el ingreso del usuario con el mensaje final
    $("#cotizar").hide(),
    $("#formulario").hide(),
    $("#mensajeFinal").show();

    //para resetear los valores del cotizador y formulario cuando vuelve a empezar
    $(".divQueCotiza").html(""),
    $("#metros").val(""),
    $("#tela").val(""),
    $("#nombre").val(""),
    $("#mail").val(""),
    $("#telefono").val(""),
    $("#mensaje").val("");

    //para ocultar el mensaje de confirmacion y volver a empezar
    setTimeout(() => {
      $("#cotizar").show();
      $("#consulta").show();
      $("#mensajeFinal").hide();
    }, 4000);

    // para almacenar el array en formato JSON en el storage. uno de base de datos de usuario y otro de pedidos por usuario
    localStorage.setItem("usuarios", JSON.stringify(personas));
    localStorage.setItem("pedidosxusuario", JSON.stringify(pedidos));

    // para que me devuelva en la consola lo que está en el storage en formato array.
    console.log("Este es el JSON de usuarios", JSON.parse(localStorage.getItem("usuarios")));
    console.log("Este es el JSON de pedidos por usuarios", JSON.parse(localStorage.getItem("pedidosxusuario")));

  });

});
