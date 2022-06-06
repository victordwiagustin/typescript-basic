// LITERAL TYPES EXAMPLE

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // LITERAL TYPES
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2; // force convert to number
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(20, 50, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '50', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Merry', 'Weather', 'as-text');
console.log(combinedNames);
