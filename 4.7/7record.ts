// K es la llave, o key y T, el valor

type Puntuaciones = Record<string, number>

const puntuaciones: Puntuaciones = {
    juan: 85,
    maria: 99,
    pedro: 78,
   // romero: "tuki" ---> esto nos va a dar un error, ya que Record nos define la estructura de clave valor en formato string: number
}
