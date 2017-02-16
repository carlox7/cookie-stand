' use strict';

//User input form
var storeFormEl = document.getElementById('new-store-form');

//Event Listener
storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation(); //prevents event bubbling and capturing

  var name = event.target.cookieStoreName.value;
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  // console.log(name);
  // console.log(minCustomers);
  // console.log(maxCustomers);
  // console.log(avgCookies);

  var store = new CookieStore(name,minCustomers,maxCustomers,avgCookies);
  store.getHourlyCookies();
  stores.push(store);
  var newStores = document.getElementById('sales-table');
  store.appendTable(newStores);
  console.log(store.getAvgCookieCount);

  console.log('User Pressed Submit Button on Form!');
}

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
  var avgCookiesPerHour = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust) * this.avgCookieSale);
  this.hourlyCookies.push(avgCookiesPerHour);
};

CookieStore.prototype.getHourlyCookies = function() {
  console.log('getHourlyCookies', this.name);
  for (var i = 0; i < storeHours.length; i++) {
    this.getAvgCookieCount();
  }
};

CookieStore.prototype.appendTable = function(salesTable){
  var userStore = document.createElement('tr');
  var storeName = document.createElement('td');
  storeName.textContent = this.name;
  userStore.appendChild(storeName);

  for(var k = 0; k < this.hourlyCookies.length; k++){
    var newCookie = document.createElement('td');
    newCookie.textContent = this.hourlyCookies[k];
    userStore.appendChild(newCookie);
  }
  salesTable.appendChild(userStore);
};
//Cookie store location names
CookieStore.prototype.drawHourlySales = function() {
  var hourlySalesRowElement = document.createElement('tr');
  salesTable.appendChild(hourlySalesRowElement);
  var storeNamesElement = document.createElement('td');
  hourlySalesRowElement.appendChild(storeNamesElement);
  storeNamesElement.textContent = this.name;

  //hourly cookie data
  for(var j = 0; j < this.hourlyCookies.length; j++){
    var hoursOpen = document.createElement('td');
    hoursOpen.textContent = this.hourlyCookies[j];
    hourlySalesRowElement.appendChild(hoursOpen);
  }
};

//blank square above location names
var blankEl = document.createElement('th');
blankEl.textContent = ' ';
salesTable.appendChild(blankEl);

//store hours element
for(var t = 0; t < storeHours.length; t++){
  var storeTimeEl = document.createElement('td');
  storeTimeEl.textContent = storeHours[t];
  salesTable.appendChild(storeTimeEl);
};
// CookieStore.prototype.drawHourlySales = function() {
//   var hoursOpenRowEl = document.createElement('td');
//   salesTable.appendChild(hoursOpenRowEl);
//   var storeHoursEl = document.createElement('td');
//   hourlySalesRowElement.appendChild(storeNamesElement);
//   storeNamesElement.textContent = storehours;
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

//console.log('--------Event Listeners-------');
