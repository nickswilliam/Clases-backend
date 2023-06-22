interface Auto {
    marca?: string,
    modelo?: string,
    puertas?: number,
}

function crearAuto(auto: Required<Auto>):void{
    console.log(auto);
}

const auto: Required<Auto> = {
    marca: 'Ford',
    modelo: 'Falcon',
    puertas: 5
}

const auto2: Auto = {
    marca: 'VolksWagen',
    modelo: 'Fox',
    puertas: 4
}

crearAuto(auto)
