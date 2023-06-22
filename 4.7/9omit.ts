interface Jugador {
    nombre: string,
    edad: number,
    posicion: string,
    equipo: string,
    nacionalidad: string
}

type InfoJugador = Omit<Jugador, "equipo" | "posicion"> //el type Omit, omite los valores especificados en el segundo orden <Interface, (omits)>

const infoJugador: InfoJugador = {
    nombre: 'Messi'.toUpperCase(),
    edad: 35,
    nacionalidad: 'Argentino'
}

console.log(infoJugador);
