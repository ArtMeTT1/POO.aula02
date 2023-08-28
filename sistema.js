"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistema = void 0;
var Sistema = /** @class */ (function () {
    function Sistema() {
        this.bikes = [];
        this.users = [];
        this.reservas = [];
    }
    Sistema.prototype.cadastraBike = function (bike) {
        this.bikes.push(bike);
    };
    Sistema.prototype.cadastraUsuario = function (usuario) {
        this.users.push(usuario);
    };
    Sistema.prototype.aluga = function (aluguel) {
        this.reservas.push(aluguel);
        aluguel.bike.status = true; //seta o status da bike alugada para ocupado
    };
    return Sistema;
}());
exports.Sistema = Sistema;
