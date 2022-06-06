// UNKNOWN ========================

let userInput: unknown; // UNKNOWN lebih baik dari ANY karena lebih restrictive
let userName: string;

userInput = 5;
userInput = 'Max';

// assignment dengan UNKNOWN bisa jadi error, perlu pengecekan karena tidak tergaransi akan dapat type yg benar
if (typeof userInput === 'string') {
  userName = userInput;
}

// ANY ========================

let userInput_Any: any; // ANY
let userName_String: string;

userInput_Any = 5;
userInput_Any = 'Max';

userName_String = userInput_Any; // ANY tanpa pengecekan tidak akan error
