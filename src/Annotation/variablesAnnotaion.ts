

//*  *****Variable Type Annotation*******   *//
//✅ Benefits: Prevents assigning values of incorrect types.
let theName = "karim";
theName = "said";
let theAge: number = 40;
let hire: boolean = true;
// when we don't know the type or the data will change  we could simply use any
let all: any = "Elzero Web School";
all = 100;
let allVars; // Any
allVars = 5;
allVars = "karim";

// Sometimes a variable can hold more than one type. Use the | (pipe) operator for union types:
let any: (string |number | boolean)  ='karim'  // the paranthes are optional
any =true  ;
any= 12
