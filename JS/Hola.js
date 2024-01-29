var botonNo = document.getElementById("botonNo");

// Para computadoras
botonNo.addEventListener("mouseover", function() {
    moverBotonNo();
});

// Para dispositivos táctiles (teléfonos, tablets, etc.)
botonNo.addEventListener("touchstart", function(event) {
    event.preventDefault(); // Evita el comportamiento táctil predeterminado (como el desplazamiento)
    moverBotonNo();
});

document.getElementById("botonSi").addEventListener("click", function() {
    mostrarMensajeAmor();
});

function moverBotonNo() {
    botonNo.style.position = "absolute";
    botonNo.style.left = Math.random() * (window.innerWidth - botonNo.clientWidth) + "px";
    botonNo.style.top = Math.random() * (window.innerHeight - botonNo.clientHeight) + "px";
}

function mostrarMensajeAmor() {
    window.location.href = "/amo.html";
}
