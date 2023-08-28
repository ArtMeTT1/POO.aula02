"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
var Aluguel = /** @class */ (function () {
    function Aluguel(inicioReserva, fimReserva, locatario, local, //CEP
    bike) {
        this.inicioReserva = inicioReserva;
        this.fimReserva = fimReserva;
        this.locatario = locatario;
        this.local = local;
        this.bike = bike;
    }
    return Aluguel;
}());
exports.Aluguel = Aluguel;
