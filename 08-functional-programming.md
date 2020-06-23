## What are callbacks?

Functions that are passed into another function to decide the invocation of that function.

## What are first class functions?

Function that

- can be assigned to a variabled
- passed into another function
- returned from another function

## What are higher order functions?

Functions that

- take a function as an argument
- return a function

## What is a lambda?

A function that is

- passed in another function
- returned from another function

## How do I use map?

`users.map(user => user.name)`

## What are the arguments of the map callback?

- element
- index
- array

## How do I get a copy of a subset of an array?

`array.slice(inclusiveStartIndex, exclusiveEndIndex)`

## How do I get a copy of an array using slice?

`array.slice()`

## What does reduce do?

Iterates over each item in array and returns single value

```
// reduce(callback, initialValueOfAccumulator)
users.reduce((sum, user) => sum + user.age, 0)
```

## What are the arguments of the reduce callback?

- accumulator
  - assigned return value of callback

- element
- index
- array

## What is the default sorting method of Array.prototype.sort?

Unicode point value

## Does Array.prototype.sort mutate the array?

Yes :(

## How do I check if all items in an array meet a criteria?

`Array.prototype.every`

## How do I check if some items in an array meet a criteria?

`Array.prototype.some`

## What do you call the number of arguments of a function?

Its arity

## What is currying?

Convert a function of N arity into N functions of arity 1.

```
//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
```

## What is partial application?

Applying a few arguments to a function at a time and returning another function that is applied to more arguments.

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
