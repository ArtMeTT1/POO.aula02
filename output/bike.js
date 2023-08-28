"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    constructor(nSerie) {
        this.status = false; //se tá reservada = 1, se tá livre = 0
        this.nSerie = nSerie;
    }
    libera() {
        if (this.status == false) {
            this.status = true;
            return true; //se ela não tá reservada retorna 1 pra desbloquear o trem
        }
        else
            return false; //não desbloquea o trem
    }
}
exports.Bike = Bike;
