// Definir la función openForm() fuera del ámbito del evento DOMContentLoaded
function openForm() {
  const contactForm = document.querySelector(".formulario");
  contactForm.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const contactBtns = document.querySelectorAll(".contacto-boton");

  // Asignar event listeners a los botones de contacto
  contactBtns.forEach(function (btn) {
    btn.addEventListener("click", openForm);
  });

  // Función para cerrar el formulario de contacto
  function closeForm() {
    const contactForm = document.querySelector(".formulario");
    contactForm.style.display = "none";
  }

  // Asignar event listener al botón de cerrar el formulario
  const closeBtn = document.querySelector(".cancel");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeForm);
  }
});
