// FUNCTIONS

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:', num);
}

printResult(add(1, 7));


// specify function types as variable type 

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));


// CALLBACK types

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(20, 50, (result) => {
  console.log('callback result', result);
});
