
// Para detener la comprobación, puedes usar clearInterval(intervalId).
function comprobarCondicion() {
  // Obtén todas las pestañas abiertas
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      const url = tab.url.toLowerCase(); // Convierte la URL a minúsculas
      if (url.includes("tiktok") || url.includes("instagram") || url.includes("shorts") || url.includes("facebook") || url.includes("porn") || url.includes("xxx") || url.includes("hentai") || url.includes("twitter") || url.includes("cascade") || url.includes("paginated")) {
        // Redirigir a chess.com o a la URL de tu elección
        chrome.tabs.update(tab.id, { url: "file:///C:/Users/Jonat/Desktop/Projecto%20Anti-Procrastinacion/Lobby.html" });

        
      }

      console.log("URL de la pestaña: " + tab.url);
    
    });
  });
}

// Establece el intervalo en milisegundos (5000 ms para 5 segundos).
const intervalId = setInterval(comprobarCondicion, 1000);

// Para detener la comprobación, puedes usar clearInterval(intervalId).
