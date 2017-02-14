' use strict';

//Setting up first and pike object literal

var firstAndPike = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  hoursDaily: 15,
};

function getRandomHourlyCustomers(minHourlyCust, maxHourlyCust) {
  return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust + 1)) + minHourlyCust;
}
