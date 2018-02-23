// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
var errmax = {
    error: "You are rich, my friend! We don't have so much coins for exchange"
  }
if (currency > 10000 ) {
  return errmax;
}
var errmin = {}
if (currency <= 0 ) {
  return errmin;
}

var H = 0; // 50C 
var Q = 0; // 25c 
var D = 0; // 10c
var N = 0; // 5c
var P = 0; // 1c

var exchange ={};

while (currency > 0) {
  if (Math.floor(currency/50) > 0) {
    H = Math.floor(currency/50);
    currency = currency % 50;
    exchange.H = H;
  } 
  if (Math.floor(currency/25) > 0) {
    Q = Math.floor(currency/25);
    currency = currency % 25;
    exchange.Q = Q;
  } 
  if (Math.floor(currency/10) > 0) {
    D = Math.floor(currency/10);
    currency = currency % 10;
    exchange.D = D;
  } 
  if (Math.floor(currency/5) > 0) {
    N = Math.floor(currency/5);
    currency = currency % 5;
    exchange.N = N;
  } 
  if (currency > 0) {
  P = currency;
  currency = 0;
  exchange.P = P;
  }
}

return exchange;
}
