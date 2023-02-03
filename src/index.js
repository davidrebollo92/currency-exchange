const currency = require("currency.js");

function convertCurrency(amount, rate) {
   if (typeof rate != "number") throw new Error("The rate paremeter must be a number");
   if (!Number.isInteger(amount)) throw new Error("The amount parameter must be an integer without decimals");

   amount = currency(amount, { fromCents: true });
   rate = currency(rate, { decimal: true, precision: 6 });

   const amountConverted = amount.multiply(rate);

   return amountConverted.intValue;
}

module.exports = convertCurrency;
