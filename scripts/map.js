function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var map = L.map('map').setView([userLocation.lat, userLocation.lng], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([userLocation.lat, userLocation.lng]).addTo(map)
                .bindPopup('Konumun')
                .openPopup();

            var query = `[out:json];
                node
                  ["brand"="Opet"]
                  (around:5000,${userLocation.lat},${userLocation.lng});
                out;`;

            var url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.elements.forEach(function(element) {
                        var lat = element.lat;
                        var lon = element.lon;
                        var name = element.tags.name || 'Opet İstasyonu';
                        L.marker([lat, lon]).addTo(map)
                            .bindPopup(name);
                    });
                });
        }, function() {
            alert('Konum bilgisi alınamadı.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

document.addEventListener('DOMContentLoaded', initMap);
