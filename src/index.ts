"use strict";

import * as currency from "currency.js";

export function convertCurrency(amount: number, exchangeRate: number) {
   if (typeof exchangeRate != "number") throw new Error("The exchangeRate paremeter must be a number");
   if (!Number.isInteger(amount)) throw new Error("The amount parameter must be an integer without decimals");

   const cAmount = currency(amount, { fromCents: true });
   const cExchangeRate = currency(exchangeRate, { precision: 6 });

   const amountConverted = cAmount.multiply(cExchangeRate).intValue;

   return amountConverted;
}

export function getExchangeRate(from: number, to: number) {
   if (typeof from != "number" || typeof to != "number")
      throw new Error("The parameters entered must be of type number");

   const cFrom = currency(from, { precision: 6 });
   const cTo = currency(to, { precision: 6 });

   const exchangeRate = cTo.divide(cFrom).value;

   return exchangeRate;
}
