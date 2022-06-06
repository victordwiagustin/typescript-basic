// TYPE ALIASES

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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

const combinedNames = combine('Merry', 'Weatherz', 'as-text');
console.log(combinedNames);
