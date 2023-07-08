var map = L.map("map").setView([39.1727, -86.5233], 16);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
L.marker([39.1727, -86.5233])
        .addTo(map)
        .bindPopup("<p>Timeless Tales</p>")
        .openPopup();