interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
}

function updateData(persona: Persona, cambios: Partial<Persona>): Persona {
    return{...persona, ...cambios}
}

const persona: Persona = {
    nombre: 'Nicks',
    edad: 27,
    direccion: 'Soldado Molina 2367'
}

const cambios: Partial<Persona> = {
    nombre: 'Johny',
    edad: 33
}

const personaActualizada = updateData(persona, cambios)
console.log(personaActualizada);
