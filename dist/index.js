"use strict";
let age = 22; // age will be a number
let fullName = "Ajibola Segun"; // string
let isDark = true; // boolean
let hobbies = "coding"; // can be any data type
let ids = [4, 5, 2]; // array of numbers
let store = [4, "five", 2]; //array of any data types
// Tuple
let person = [3, true, "Hi"]; // array will contain number, boolean and string in the order
// Tuple Array
let person2; // array of arrays and will only contain number and string in the order, example below
person2 = [
    [1, "John"],
    [2, "Mike"],
    [3, "Lekan"]
];
// Union
let pid; // can be string or number
pid = "22";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up, Direction.Left); // output = 1, 3
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction.Up, Direction.Left); // output = 2, 4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "one";
    Direction2["Down"] = "two";
    Direction2["Left"] = "three";
    Direction2["Right"] = "four";
})(Direction2 || (Direction2 = {}));
console.log(Direction.Up, Direction2.Left); // output = one, three
const user = {
    id: 5,
    name: "Segun"
};
// can also be written as this below for user2
const user2 = {
    id: 5,
    name: "Segun"
};
// Type Assertion
let cid = "hello";
let customerID = cid;
// let customerID = cid as a number
customerID = 1;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
log("hello");
// Can be able to pass string or number to log() function
