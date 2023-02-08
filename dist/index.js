var $8zHUo$currencyjs = require("currency.js");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "convertCurrency", () => $882b6d93070905b3$export$dca80e37bfad9c5a);
$parcel$export(module.exports, "getExchangeRate", () => $882b6d93070905b3$export$de605e40e27a05ae);

"use strict";
function $882b6d93070905b3$export$dca80e37bfad9c5a(amount, exchangeRate) {
    if (typeof exchangeRate != "number") throw new Error("The exchangeRate paremeter must be a number");
    if (!Number.isInteger(amount)) throw new Error("The amount parameter must be an integer without decimals");
    const cAmount = $8zHUo$currencyjs(amount, {
        fromCents: true
    });
    const cExchangeRate = $8zHUo$currencyjs(exchangeRate, {
        precision: 6
    });
    const amountConverted = cAmount.multiply(cExchangeRate).intValue;
    return amountConverted;
}
function $882b6d93070905b3$export$de605e40e27a05ae(from, to) {
    if (typeof from != "number" || typeof to != "number") throw new Error("The parameters entered must be of type number");
    const cFrom = $8zHUo$currencyjs(from, {
        precision: 6
    });
    const cTo = $8zHUo$currencyjs(to, {
        precision: 6
    });
    const exchangeRate = cTo.divide(cFrom).value;
    return exchangeRate;
}


//# sourceMappingURL=index.js.map
