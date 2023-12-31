"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var bike_1 = require("./bike");
var rent_1 = require("./rent");
var user_1 = require("./user");
var bike = new bike_1.Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, [], 'bikeId');
var user = new user_1.User('Maria', 'maria@mail.com', '1234');
var today = new Date();
var twoDaysFromToday = new Date();
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2);
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var sevenDaysFromToday = new Date();
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7);
var rent1 = rent_1.Rent.create([], bike, user, today, twoDaysFromToday);
var user2 = new user_1.User('Maria Clara', 'maria@mail.com', '3123');
var app = new app_1.App();
app.registerUser(user);
app.registerBike(bike);
app.rentBike('bikeId', user, today, twoDaysFromToday);
app.returnBike('bikeId', sevenDaysFromToday);
//app.rentBike(bike,user2,today,twoDaysFromToday)
//console.log(app.findRent('567'))
//console.log(app.findUser('maria@mail.com'))
//app.removeUser('maria@mail.com')
//console.log(app.findUser('maria@mail.com'))
