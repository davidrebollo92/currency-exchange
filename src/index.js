const currency = require("currency.js");

function convertCurrency(amount, exchangeRate) {
   if (typeof exchangeRate != "number") throw new Error("The exchangeRate paremeter must be a number");
   if (!Number.isInteger(amount)) throw new Error("The amount parameter must be an integer without decimals");

   amount = currency(amount, { fromCents: true });
   exchangeRate = currency(exchangeRate, { decimal: true, precision: 6 });

   const amountConverted = amount.multiply(exchangeRate).intValue;

   return amountConverted;
}

function getExchangeRate(from, to) {
   if (typeof from != "number" || typeof to != "number")
      throw new Error("The parameters entered must be of type number");

   from = currency(from, { decimal: true, precision: 6 });
   to = currency(to, { decimal: true, precision: 6 });

   const exchangeRate = to.divide(from).value;

   return exchangeRate;
}

module.exports = { convertCurrency, getExchangeRate };
