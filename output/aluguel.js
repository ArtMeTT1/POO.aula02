"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
class Aluguel {
    constructor(inicioReserva, fimReserva, locatario, local, //CEP
    bike) {
        this.inicioReserva = inicioReserva;
        this.fimReserva = fimReserva;
        this.locatario = locatario;
        this.local = local;
        this.bike = bike;
    }
}
exports.Aluguel = Aluguel;
