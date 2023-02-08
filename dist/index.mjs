import * as $hgUW1$currencyjs from "currency.js";


"use strict";
function $149c1bd638913645$export$dca80e37bfad9c5a(amount, exchangeRate) {
    if (typeof exchangeRate != "number") throw new Error("The exchangeRate paremeter must be a number");
    if (!Number.isInteger(amount)) throw new Error("The amount parameter must be an integer without decimals");
    const cAmount = $hgUW1$currencyjs(amount, {
        fromCents: true
    });
    const cExchangeRate = $hgUW1$currencyjs(exchangeRate, {
        precision: 6
    });
    const amountConverted = cAmount.multiply(cExchangeRate).intValue;
    return amountConverted;
}
function $149c1bd638913645$export$de605e40e27a05ae(from, to) {
    if (typeof from != "number" || typeof to != "number") throw new Error("The parameters entered must be of type number");
    const cFrom = $hgUW1$currencyjs(from, {
        precision: 6
    });
    const cTo = $hgUW1$currencyjs(to, {
        precision: 6
    });
    const exchangeRate = cTo.divide(cFrom).value;
    return exchangeRate;
}


export {$149c1bd638913645$export$dca80e37bfad9c5a as convertCurrency, $149c1bd638913645$export$de605e40e27a05ae as getExchangeRate};
//# sourceMappingURL=index.mjs.map
