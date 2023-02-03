const currency = require("currency.js");

function convertCurrency(amount, rate) {
   if (typeof rate != "number") throw new Error("The rate paremeter must be a number");
   if (!Number.isInteger(amount)) throw new Error("The amount parameter must be an integer without decimals");

   amount = currency(amount, { fromCents: true });
   rate = currency(rate, { decimal: true, precision: 6 });

   const amountConverted = amount.multiply(rate).intValue;

   return amountConverted;
}

function getRate(from, to) {
   if (typeof from != "number" || typeof to != "number")
      throw new Error("The parameters entered must be of type number");

   from = currency(from, { decimal: true, precision: 6 });
   to = currency(to, { decimal: true, precision: 6 });

   rate = to.divide(from).value;

   return rate;
}

module.exports = { convertCurrency, getRate };
