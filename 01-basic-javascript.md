# https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript

## What are the data types of JS?

- undefined
- null
- boolean
- string
- symbol
- number
- object

## What is the initial value of a JS variable?

undefined

## What is the result of doing a math operation on undefined?

NaN

## What is the result of concatenating a string with undefined?

"undefined"

## What is the % operator called?

remainder operator

## Why is the % operator not called modulus operator?

It does not work properly with negative numbers

## How do I add an element to the end of an array?

`array.push(value);`

## How do I remove the last element of an array?

`array.pop();`

## How do I remove the first element of an array?

`array.shift()`;

## How do I add an element to the start of an array?

`array.unshift(value)`

## What is scope?

The visibility of variables.

## What value does a function return if it does not have a return statement?

`undefined`

## Do comparison operators do type coercion?

Yes!

```
1 != "1"    // false
7 > '3'  // true
```

## What kind of equality do switch statements use?

Strict equality

## What is the format of a switch statement?

```
switch(value) {
  case value1:
    statements;
    break;
  ...

  default:
    defaultStatement;
    break;
}
```

## Can you use numbers as object properties?

Yes! But JS will typecast them as strings.

```
var anotherObject = {
  5: "five",
};
```

## Can you omit quotes for string properties?

Yes, but only for single-word properties

```
var anotherObject = {
  make: "Ford"
};
```

## How do I delete a property from a JS object?

`delete object.property`

## How do I determine if an object has a property?

`object.hasOwnProperty(property)`

## How do I generate a random number?

`Math.random()`

## How do I get the floor of a number?

`Math.floor(number)`

## How do I parse an integer from a string?

`parseInt(string)`

## What are the components of recursive function?

- base case
- recursive call

## Todo: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property
