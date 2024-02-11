// Lista de palabras prohibidas
const palabrasProhibidas = [
  "tiktok",
  "instagram",
  "shorts",
  "facebook",
  "porn",
  "xxx",
  "hentai",
  "twitter",
  "cascade",
  "paginated"
];

// Función para comprobar si la URL contiene alguna palabra prohibida
function comprobarCondicion() {
  // Obtén todas las pestañas abiertas
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      const url = tab.url.toLowerCase(); // Convierte la URL a minúsculas
      if (palabrasProhibidas.some(palabra => url.includes(palabra))) {
        // Redirigir a chess.com o a la URL de tu elección
        chrome.tabs.update(tab.id, { url: "Lobby.html" });
      }

      console.log("URL de la pestaña: " + tab.url);
    });
  });
}

// Establece el intervalo en milisegundos (1000 ms para 1 segundo).
const intervalId = setInterval(comprobarCondicion, 1000);

// Para detener la comprobación, puedes usar clearInterval(intervalId).
