const xmpp = require("node-xmpp-server");
const config = require("./config"); // config.js dosyasını içe aktar

// Odaları tutmak için basit bir veri yapısı
const rooms = new Map();

// XMPP sunucusunu oluşturma
const server = new xmpp.C2S.TCPServer({
  port: 5222, // XMPP'nin standart bağlantı noktası
  domain: config.hosts.domain, // Sunucunuzun etki alanı (config dosyasından alınacak)
});

// Sunucu başlatıldığında
server.on("online", function () {
  console.log(
    `XMPP Sunucusu Başlatıldı ve ${config.hosts.domain} üzerinde çalışıyor`
  );
});

// Kullanıcı bağlandığında
server.on("connect", function (client) {
  console.log("Yeni bir istemci bağlandı");

  // Kullanıcı bağlandığında, belirtilen odaya katılım işlemini gerçekleştiriyoruz
  client.on("online", function () {
    const room = client.jid.local; // Kullanıcının JID'sinden oda adını alıyoruz
    rooms.set(client, room); // Kullanıcıyı odasına ekliyoruz
    console.log(`Kullanıcı ${client.jid.toString()} odaya katıldı: ${room}`);
  });

  // Kullanıcı bağlantısı kapatıldığında
  client.on("disconnect", function () {
    const room = rooms.get(client); // Kullanıcının bulunduğu odayı alıyoruz
    rooms.delete(client); // Kullanıcıyı odadan çıkarıyoruz
    console.log(`Kullanıcı ${client.jid.toString()} odadan ayrıldı: ${room}`);
  });
});
