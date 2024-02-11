function EliminarShorts() {
    // Obtén todos los elementos con la clase "reel-video-in-sequence"
    const elements = document.querySelectorAll('.reel-video-in-sequence');
  
    // Itera sobre los elementos y elimina aquellos con un ID mayor a 1
    elements.forEach((element) => {
      const id = parseInt(element.getAttribute('id'));
      if (id > 0) {
        element.remove();
      }
    });
  }