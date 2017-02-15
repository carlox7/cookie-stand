' use strict';

var salesTable = document.getElementById('sales-table');

//Creating array for each hour the store is open
var storeHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 noon', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//Defining a constructor function

function CookieStore(name, minHourlyCust, maxHourlyCust, avgCookieSale, hourlyCookies) {
  this.name = name || 'Unknown'; //if undefined it will output Unknown
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlyCookies = hourlyCookies || []; //if undefined it will default to empty array
}

CookieStore.prototype.getAvgCookieCount = function(){
  var avgCookiesPerHour = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust) * this.avgCookieSale;
  this.hourlyCookies.push(avgCookiesPerHour);
};

CookieStore.prototype.getHourlyCookies = function() {
  console.log('getHourlyCookies', this.name);
  for (var i = 0; i < storeHours.length; i++) {
    Math.floor(this.getAvgCookieCount());
  }
  var hourlyCookieSalesElement = document.createElement('td');
  hourlyCookieSalesElement.textContent = this.getHourlyCookies;
};

CookieStore.prototype.drawHourlySales = function() {
  var hourlySalesRowElement = document.createElement('tr');
  salesTable.appendChild(hourlySalesRowElement);
  var storeNamesElement = document.createElement('td');
  hourlySalesRowElement.appendChild(storeNamesElement);
  storeNamesElement.textContent = this.name;
};

//Setting up instances for Pike Place

var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);

//pikePlace.getHourlyCookies();
// pikePlace.drawHourlySales();
//Setting up instance for SeaTac Airport store

var seatacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);

//Setting up instance for Seattle Center store

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);

//Setting up instance for Capitol Hill store

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);

//Setting up instance for Alki store

var alki = new CookieStore('Alki', 2, 16, 4.6);

//Store defined instances into an array

var stores = [pikePlace, seatacAirport, seattleCenter, capitolHill, alki];

for (var i = 0; i < stores.length; i++) {
  stores[i].getHourlyCookies();
}
console.log(stores);

for (var i = 0; i < stores.length; i++) {
  stores[i].drawHourlySales();
}

//Table

// var tableEl = document.createElement('table');
//
// for (var i = 0; i < stores.length; i++) {
//   var currentStore = stores[i];
//
//   var rowEl = document.createElement('tr');
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.storeHours;
//   rowEl.appendChild(storeHoursEl);
//
//   var minHourlyCustEl = document.createElement('td');
//   minHourlyCustEl.textContent = currentStore.stores;
//   rowEl.appendChild(storesEl);
//
//   var maxHourlyCustEl = document.createElement('td');
//   maxHourlyCustEl.textContent = currentStore.maxHourlyCust;
//   rowEl.appendChild(maxHourlyCustEl);
//
//   tableEl.appendChild(rowEl);
// }
//
// document.body.appendChild(tableEl);
