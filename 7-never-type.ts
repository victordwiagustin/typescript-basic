// standarized error example

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; // throw tidak akan mengembalikan apapun, not even undefined
  // while(true) {} // infinite loop
}

generateError('An error occured!', 500);
