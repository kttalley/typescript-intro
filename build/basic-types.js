//boolean true.false
var isDone = false;
//numbers
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
// let big: bigint = 100n;
//strings
var color = "blue";
//or single quote
var colorRed = 'red';
//or template strings 
//which can span multiple lines 
//and have embedded expressions. 
//These strings are surrounded by the 
//backtick/backquote (`) character, 
//and embedded expressions are of the form ${ expr }.
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "\n    Hello, my name is ".concat(fullName, ".\n    I'll be ").concat(age + 1, " years old next month.\n");
//Arrays
var list = [1, 2, 3];
// let list: Array<number> = [1,2,3];
//tuple
// Tuple types allow you to express 
// an array with a fixed number 
// of elements whose types are 
// known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
//Declar a tuple type
var x;
//intialize it
x = ["hello", 10]; //OK
//initialize it incorrectly
// x = [10, "hello"] //error
//Type 'number' is not assignable to type 'string'.
//Type 'string' is not assignable to type 'number'.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
var ColorNonDefault;
(function (ColorNonDefault) {
    ColorNonDefault[ColorNonDefault["Red"] = 1] = "Red";
    ColorNonDefault[ColorNonDefault["Green"] = 2] = "Green";
    ColorNonDefault[ColorNonDefault["Blue"] = 3] = "Blue";
})(ColorNonDefault || (ColorNonDefault = {}));
var colorName = Color[2];
//displays 'green';
console.log(colorName);
//unknown
//dynamic content variables.
var notSure = 4;
notSure = "could maybe be a string instead?";
//ok, def a bool
notSure = false;
//Ok, return value of 'getValue' is not checked
var str = getValue("myString");
//The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
var looselyTyped = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
var strictlyTyped = 4;
// strictlyTyped.toFixed();
//void
//functions that do not return a value
//functions that are a 'void'
function warnUser() {
    console.log("This is my warning message");
}
//console log is not returning a value
//null and undefined
//not much else we can assign these variables!
var u = undefined;
var n = null;
//never
