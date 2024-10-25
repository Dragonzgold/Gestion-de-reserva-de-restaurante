// Visualizador del mapa

let map = L.map('miMapa').setView([40.394624, -3.711791],17);

//Esta linea permite la ejecucion del mapa, al igual que permite dar una atribucion
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Poner un marcador en el lugar que queramos en el mapa. Al igual de que se le puede añadir una descripcion 
L.marker([40.394624, -3.711791]).addTo(map).bindPopup("Restaurante The Grand OAK")