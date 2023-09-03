"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var rent_1 = require("./rent");
//import crypto from 'crypto'
var App = /** @class */ (function () {
    function App() {
        this.users = [];
        this.bikes = [];
        this.rents = [];
    }
    App.prototype.findUser = function (email) {
        return this.users.find(function (user) { return user.email === email; });
    };
    App.prototype.findRent = function (bikeId) {
        return this.rents.find(function (rent) { return rent.bike.id === bikeId; });
    };
    App.prototype.findBike = function (bikeId) {
        return this.bikes.find(function (bike) { return bike.id === bikeId; });
    };
    App.prototype.registerUser = function (user) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var rUser = _a[_i];
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.');
            }
        }
        //user.id = crypto.randomUUID()
        this.users.push(user);
    };
    App.prototype.removeUser = function (email) {
        var index;
        index = this.users.indexOf(this.findUser(email));
        this.users.splice(index, 1);
    };
    App.prototype.registerBike = function (bike) {
        for (var _i = 0, _a = this.bikes; _i < _a.length; _i++) {
            var rBike = _a[_i];
            if (rBike.id === bike.id)
                throw new Error('Duplicate bike');
        }
        //bike.id = crypto.randomUUID
        this.bikes.push(bike);
    };
    App.prototype.rentBike = function (bikeId, user, dateFrom, dateTo) {
        var newRent;
        var verBike = this.findBike(bikeId);
        var verUser = this.findUser(user.email);
        if (verBike == undefined || verUser == undefined) {
            throw new Error('User or bike not registered.');
        }
        newRent = rent_1.Rent.create(this.rents, verBike, user, dateFrom, dateTo);
        this.rents.push(newRent);
        console.log("rent done");
    };
    App.prototype.returnBike = function (bikeId, dateReturned) {
        var verBike = this.findBike(bikeId);
        if (verBike == undefined) {
            throw new Error('Bike not registered.');
        }
        var rents = this.rents.filter(function (rent) { return rent.bike.id === bikeId; });
        var rentReturn = rents.find(function (rent) { return rent.dateReturned === undefined; });
        rentReturn.dateReturned = dateReturned;
        console.log('bike returned');
    };
    return App;
}());
exports.App = App;
