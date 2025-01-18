$('#contactForm').on('submit', function (event) {
    event.preventDefault();
  
    // Validación manual para el formulario
    const form = this;
    if (!form.checkValidity()) {
      event.stopPropagation();
      $(form).addClass('was-validated');
      return;
    }
  
    // Obtener los valores del formulario
    const nombre = $('#name').val();
    const mensaje = $('#message').val();
  
    // Mostrar el mensaje de éxito y ocultar el de error
    $('#successMessage').removeClass('d-none').fadeIn();
    $('#errorMessage').addClass('d-none');
  
    // Agregar el comentario al área de comentarios
    const comentario = `
      <div class="comment p-3 mb-3 border rounded">
        <h5 class="text-primary">${nombre}</h5>
        <p>${mensaje}</p>
  
        <!-- Botón de respuesta -->
        <button class="btn btn-secondary btn-sm" onclick="toggleResponseForm(this)">Responder</button>
  
        <!-- Formulario para responder -->
        <div class="response-form d-none mt-3">
          <textarea class="form-control mb-2" placeholder="Escribe tu respuesta aquí"></textarea>
          <button class="btn btn-primary btn-sm" onclick="submitResponse(this, '${nombre}')">Enviar Respuesta</button>
        </div>
  
        <!-- Área de respuestas -->
        <div class="responses mt-3"></div>
      </div>
    `;
    $('#commentsSection').prepend(comentario);
  
    // Limpiar el formulario y eliminar la clase de validación
    $(form).removeClass('was-validated')[0].reset();
  
    // Opcionalmente, podrías ocultar el mensaje de éxito después de unos segundos
    setTimeout(function() {
      $('#successMessage').fadeOut();
    }, 5000); // Se oculta después de 5 segundos
  });
  
  // Función para mostrar/ocultar el formulario de respuesta
  function toggleResponseForm(button) {
    $(button).next('.response-form').toggleClass('d-none');
  }
  
  // Función para enviar una respuesta a un comentario
  function submitResponse(button, comentarioAutor) {
    const respuestaValidar = $(button).prev('textarea').val();

    // Verificar que la respuesta no esté vacía
    if (respuestaValidar.trim() === "") {
      alert("Por favor escribe una respuesta.");
      return;
    }

    // Crear el HTML para la respuesta
    const respuesta = `
      <div class="response p-3 mb-2 border rounded">
        <h6 class="text-info">Respuesta a ${comentarioAutor}:</h6>
        <p>${respuestaValidar}</p>
      </div>
    `;

    // Agregar la respuesta al área de respuestas del comentario (ahora al final)
    $(button).closest('.comment').find('.responses').append(respuesta); // Usar append para agregar la respuesta al final

    // Limpiar el formulario de respuesta
    $(button).prev('textarea').val("");
    $(button).closest('.response-form').addClass('d-none');
}