import { Sistema } from "./sistema";
import { Bike } from "./bike";
import { Aluguel } from "./aluguel";
import { Usuario } from "./usuario";

const sistema0 = new Sistema
const arthur = new Usuario('arthur craveiro', '163597')
sistema0.cadastraUsuario(arthur)
const bike0 = new Bike('1012')
const bike1 = new Bike('2003')
sistema0.cadastraBike(bike0)
sistema0.cadastraBike(bike1)
const date1 = new Date("2020-02-01")
const reserva0 = new Aluguel(date1, date1, arthur, 'ict - unifesp', bike0)
sistema0.aluga(reserva0)

console.log(sistema0)
console.log(reserva0)