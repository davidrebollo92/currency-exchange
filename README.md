# Currency-exchange

### Install

```
npm i @davidrebollo92/currency-exchange
```

### Documentation

Convert currencies by entering the exchange rate with a precision of 6 decimal places. It also allows you to get the exchange rate between two amounts. This package is supported by currency.js.

The package consists of two functions:

Convert currency from int amount and decimal exchange rate. The amount must be a integer number and exchange rate must be a decimal number.

```js
convertCurrency(intAmount, decimalExchangeRate);
```

Get the exchange rate between two amounts. This function is useful if you don't have the exchange rate between two amounts. The amount must be a decimal numbers.

```js
getExchangeRate(fromAmount, toAmount);
```

### Example

```js
const { convertCurrency, getExchangeRate } = require("@davidrebollo92/currency-exchange");

// EUR to MXN exchange rate -> 20.116859
const amountConverted = convertCurrency(5000, 20.116859);
console.log(amountConverted); // Result: 100584
// 50€ to MXN = 1005.84 MXN

// Exchange rate from MXN to EUR -> 20.116859 MXN = 1 EUR
const exchangeRate = getExchangeRate(20.116859, 1);
console.log(exchangeRate); // Result: 0.04971
// 1 MXN to EUR = 0.04971 EUR
```
