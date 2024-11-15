//---------Js para Pagina HTML: index.html----------------//
//---------Bienvenida a la pagina----------------//
function mostrarBienvenida() {
    alert("Nos es grato el que usted tenga interés en conocer nuestra gastronomía, ¡Bienvenidos!");
}

// Llama a la función cuando la página se haya cargado completamente
if (window.location.pathname.includes('index.html')) {
    window.onload =  mostrarBienvenida;
}

//---------Js para Pagina HTML: contacto.html----------------//
// Función para preguntar si el usuario es mayor de edad en la página de contacto
function verificarEdad() {
    var edad = prompt("Para poder acceder a esta sesión, es necesario confirmar tu edad. ¿Cuántos años tienes?");
    
    if (edad >= 18) {
        alert("Bienvenido, has accedido con éxito.");
    } else {
        alert("Lo sentimos, no tienes la edad suficiente para ver este sitio web, por favor verla en compañia de tus padres");
    }
}

// Ejecutar la función de verificación de edad al cargar la página de contacto
if (window.location.pathname.includes('contacto.html')) {
    window.onload = verificarEdad;
}

//---------Js para Pagina HTML: quienes_somos.html----------------//
// Función para cambiar el estilo de las imágenes al pasar el ratón
function resaltarImagen(element) {
    element.style.border = "20px solid #5e7909";
}

//---------Js para Pagina HTML: carta.html----------------//
// Función para cambiar el fondo de toda la pagina
function cambiarFondoAlCargar() {
    document.body.style.backgroundColor = "#5e7909";
}

// Ejecutar la función de cambio de fondo al cargar la página donde estamos
if (window.location.pathname.includes('carta.html')) {
    window.onload = cambiarFondoAlCargar;
}

//---------Js para Pagina HTML: donde_estamos.html----------------//
// Función que solicita el nombre del usuario 
function pedirNombre() {
    let nombre = prompt("¿Cuál es tu nombre?"); 
}

// Llama a la función cuando la página se haya cargado completamente
if (window.location.pathname.includes('donde_estamos.html')) {
    window.onload =  pedirNombre;
}