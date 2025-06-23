let socket = io();

const map = L.map('map').setView([0, 0], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'OpenStreetMap',
}).addTo(map);

const markers = {};
let firstLocationCentered = false;

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    position => {
      const { latitude, longitude } = position.coords;

      if (!firstLocationCentered) {
        map.setView([latitude, longitude], 16);
        firstLocationCentered = true;
      }

      socket.emit('send-location', { latitude, longitude });
    },
    error => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

socket.on('received-location', data => {
  const { id, latitude, longitude } = data;

  const jitter = (Math.random() - 0.5) * 0.0002;
  const lat = latitude + jitter;
  const lng = longitude + jitter;

  if (markers[id]) {
    markers[id].setLatLng([lat, lng]);
  } else {
    markers[id] = L.marker([lat, lng]).addTo(map); // No popup here
  }

  console.log(`Marker for ${id} updated at:`, lat, lng);
});

socket.on('user-disconnected', id => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
