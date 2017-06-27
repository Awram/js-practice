const num1 = 15;
const num2 = 20;

document.write(`Remainder of ${num2} / ${num1} is ${num2 % num1} <br /> `);

document.write(`The highest value of ${num1} and ${num2} is ${Math.max(num1, num2)}<br /> `);

document.write(`The square root of ${num1} is ${Math.sqrt(num1)}. That is rounded to ${Math.round(Math.sqrt(num1))} <br /> `);

document.write(`${num1} to the power of ${num2} is ${Math.pow(num1, num2)} <br /> `);

document.write(`A random number between 1 - 10 is: ${Math.floor((Math.random() * 10) + 1)} <br />`);
