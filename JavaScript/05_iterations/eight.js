const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 299,
  },
  {
    itemName: "js course",
    price: 2299,
  },
  {
    itemName: "Mobile dev course",
    price: 21199,
  },
  {
    itemName: "Data Science",
    price: 41199,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay)