document.getElementById("botonNo").addEventListener("mouseover", function() {
    moverBotonNo();
  });
  
  document.getElementById("botonSi").addEventListener("click", function() {
    mostrarMensajeAmor();
  });
  
  function moverBotonNo() {
    var botonNo = document.getElementById("botonNo");
    botonNo.style.position = "absolute";
    botonNo.style.left = Math.random() * (window.innerWidth - botonNo.clientWidth) + "px";
    botonNo.style.top = Math.random() * (window.innerHeight - botonNo.clientHeight) + "px";
  }
  
  function mostrarMensajeAmor() {
    window.location.href = "/amo.html"; 
  }
  