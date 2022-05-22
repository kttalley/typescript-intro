//boolean true.false
let isDone: boolean = false;


//numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
// let big: bigint = 100n;

//strings
let color: string = "blue";
//or single quote
let colorRed: string = 'red';
//or template strings 
//which can span multiple lines 
//and have embedded expressions. 
//These strings are surrounded by the 
//backtick/backquote (`) character, 
//and embedded expressions are of the form ${ expr }.

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `
    Hello, my name is ${fullName}.
    I'll be ${age + 1} years old next month.
`;

//Arrays
let list: number[] = [1,2,3];

// let list: Array<number> = [1,2,3];

//tuple
// Tuple types allow you to express 
// an array with a fixed number 
// of elements whose types are 
// known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

//Declar a tuple type
let x: [string, number];
//intialize it
x = ["hello", 10]; //OK
//initialize it incorrectly
// x = [10, "hello"] //error
//Type 'number' is not assignable to type 'string'.
//Type 'string' is not assignable to type 'number'.

enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:

enum ColorNonDefault {
    Red = 1,
    Green, //default 0
    Blue, //default 0
}
let colorName: string = Color[2];

//displays 'green';
console.log(colorName);


//unknown

//dynamic content variables.

let notSure: unknown = 4;
notSure = "could maybe be a string instead?";

//ok, def a bool
notSure = false;

//Any
//to opt out of type-checking, totally compat. with vanilla js

declare function getValue(key: string): any;
//Ok, return value of 'getValue' is not checked
const str: string = getValue("myString");
//The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed();

//void
//functions that do not return a value
//functions that are a 'void'

function warnUser(): void {
    console.log("This is my warning message");
  }
  //console log is not returning a value

  //null and undefined
  //not much else we can assign these variables!
  let u: undefined = undefined;
  let n: null = null;

  //never
  
  
