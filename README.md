# Currency-exchange

### Install

```
npm i @davidrebollo92/currency-exchange
```

### Example

```js
const { convertCurrency, getRates } = require("@davidrebollo92/currency-exchange");

const amountConverted = convertCurrency(5000, 3.940342);
console.log(amountConverted);

const rate = getRates(3.940342, 4.167299);
console.log(rate);
```
