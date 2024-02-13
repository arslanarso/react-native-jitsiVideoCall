var config = {
  hosts: {
    domain: "192.168.1.4", // Sunucunun etki alanı
    muc: "conference.192.168.1.4", // MUC (Multi-User Chat) hizmeti için etki alanı
    focus: "focus.192.168.1.4", // Odalara odaklanmayı yöneten hizmet için etki alanı
  },
  bosh: "http://192.168.1.4:5280/http-bind", // BOSH (Bidirectional-streams Over Synchronous HTTP) hizmetinin URL'si
  websocket: "ws://192.168.1.4:5280/xmpp-websocket", // WebSocket hizmetinin URL'si
  clientNode: "http://jitsi.org/jitsimeet", // İstemci düğümü
  iceServers: [
    // ICE sunucularını tanımla
    { urls: "stun:stun.l.google.com:19302" }, // Google STUN sunucusu
    { urls: "stun:stun1.l.google.com:19302" }, // Google STUN sunucusu
  ],
};

module.exports = config;
