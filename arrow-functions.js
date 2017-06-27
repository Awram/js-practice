let getProduct = (num1, num2) => {
  let product = num1 * num2;
  document.write(`${num1} * ${num2} = ${product} <br />`);
}
getProduct(15, 25);

let numArray = [1,2,3,4,5];

let sumNums = numArray.reduce((a,b) => a + b); // reduce repeats the addition until there is only one value left
  document.write(`Sum of ${numArray}: ${sumNums} <br />`);

let odds = numArray.filter(n => n % 2 !== 0); // filters out values from the array
  document.write(`Odd numbers of ${numArray}: ${odds} <br />`);

let tripled = numArray.map(n => n * 3); // maps values to new modified ones
  document.write(`${numArray} tripled: ${tripled} <br />`);
