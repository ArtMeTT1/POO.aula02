"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistema = void 0;
class Sistema {
    constructor() {
        this.bikes = [];
        this.users = [];
        this.reservas = [];
    }
    cadastraBike(bike) {
        this.bikes.push(bike);
    }
    cadastraUsuario(usuario) {
        this.users.push(usuario);
    }
    aluga(aluguel) {
        this.reservas.push(aluguel);
        aluguel.bike.status = true; //seta o status da bike alugada para ocupado
    }
}
exports.Sistema = Sistema;
