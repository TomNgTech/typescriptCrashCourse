let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArray: string[];
let numArray: number[];
let boolArray: boolean[];
*/

let strArray: Array<string>;
let numArray: Array<number>;
let boolArray: Array<boolean>;

let strNumTuple: [string, number];

myString = "Hello" + " " + "World";
myNum = 22;
myBool = true;
myVar = "Hello".slice(0, 3);

strArray = ["Hello", "World"]
numArray = [1, 2, 3];
boolArray = [true, false, false];

strNumTuple = ["Hello", 4]

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);

console.log(strArray);
console.log(numArray);
console.log(boolArray);

console.log(strNumTuple);

console.log(myVoid)