"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike(nSerie) {
        this.status = false; //se tá reservada = 1, se tá livre = 0
        this.nSerie = nSerie;
    }
    Bike.prototype.libera = function () {
        if (this.status == false) {
            this.status = true;
            return true; //se ela não tá reservada retorna 1 pra desbloquear o trem
        }
        else
            return false; //não desbloquea o trem
    };
    return Bike;
}());
exports.Bike = Bike;
