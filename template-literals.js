let fName = "Chris"; // creates variable with block scope
let lName = "Awram";

document.write(`Hi I'm ${fName} ${lName}.<br /><br />`); // uses new template literal notation

function basicMath (strings, ...values){
  if(strings[0] === 'Add'){
    document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]}<br />`);
  } else if (strings[0] === 'Subtract') {
    document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]}<br />`);
  } else if (strings[0] === 'Multiply') {
    document.write(`${values[0]} * ${values[1]} = ${values[0] * values[1]}<br />`);
  } else if (strings[0] === 'Divide') {
    document.write(`${values[0]} / ${values[1]} = ${values[0] / values[1]}<br />`);
  }
}

basicMath `Add${5} ${7}`;
basicMath `Subtract${20} ${5}`;
basicMath `Multiply${12} ${17}`;
basicMath `Divide${200} ${6}`;
