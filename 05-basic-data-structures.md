# Introduction to the Basic Data Structure Challenges

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures

## How do I add an item to the start of an array?

`array.unshift(...args)`

## How do I remove elements in the middle of an array?

`array.splice(index, numberOfElements);`

## How do I replace elements in the middle of an array?

`array.splice(index, numberOfElementsToDelete, ...elementsToAdd);`

## How do I extract elements from an array without changing the array?

`array.slice(indexToStartInclusive, indexToEndExclusive)`

## How do I copy an array?

`let newArr = [...oldArr]`

## How do I insert an array in another array?

`let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];`

## How do I get the index of an element in an array?

`fruits.indexOf('dates')`

## What is the result of indexOf if the element does not exist?

`-1`

## How do I remove a property from an object?

`delete object.property`

## How do I check if an object has a property?

```
users.hasOwnProperty('Alan');
'Alan' in users;
```

## How do I iterate through the keys of an object?

```
for (let user in users) {

}
```

## How do I get the keys of an object?

```
Object.keys(obj)
```
