var config = {
  hosts: {
    domain: "YOUR_LOCAL_IP_ADDRESS", // Sunucunun etki alanı
    muc: "conference.YOUR_LOCAL_IP_ADDRESS", // MUC (Multi-User Chat) hizmeti için etki alanı
    focus: "focus.YOUR_LOCAL_IP_ADDRESS", // Odalara odaklanmayı yöneten hizmet için etki alanı
  },
  bosh: "http://YOUR_LOCAL_IP_ADDRESS:5280/http-bind", // BOSH (Bidirectional-streams Over Synchronous HTTP) hizmetinin URL'si
  websocket: "ws://YOUR_LOCAL_IP_ADDRESS:5280/xmpp-websocket", // WebSocket hizmetinin URL'si
  clientNode: "http://jitsi.org/jitsimeet", // İstemci düğümü
  iceServers: [
    // ICE sunucularını tanımla
    { urls: "stun:stun.l.google.com:19302" }, // Google STUN sunucusu
    { urls: "stun:stun1.l.google.com:19302" }, // Google STUN sunucusu
  ],
};

module.exports = config;
