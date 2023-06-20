const jugadores = [
  {
    id: 1,
    nombre: "Lionel messi",
    goles: 395,
  },
  {
    id: 2,
    nombre: "cristiano ronaldo",
    goles: 123,
  },
  {
    id: 3,
    nombre: "falopa rodriguez",
    goles: 24,
  },
  {
    id: 4,
    nombre: "tukimon astenio",
    goles: 153,
  },
  {
    id: 5,
    nombre: "alexis texas",
    goles: 298,
  },
  {
    id: 6,
    nombre: "like martens",
    goles: 78,
  },
];

const score = jugadores.reduce((acc, item) => (acc += item.goles),
  0
);


const average = score/jugadores.length

console.log('Puntaje total:', score);
console.log(average, 'promedio'); 

const jugadoresNombre = jugadores.map(jugador=> jugador.nombre).join(', ')

console.log(jugadoresNombre);
