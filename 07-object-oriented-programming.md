## How do I add a method to an object?

```
let duck = {
  sayName: function() {
    return "The name of this duck is " + duck.name + ".";
  }
};
```

## How do I refer to the object within one of its method?

Use `this`:

```
let duck = {
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

## How do I define a constructor?

```
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

## What conventions should I follow when creating a constructor?

1. Capitalized name
2. Use `this` to set properties on the new object it will create.
3. Doesn't return anything

## Question: Can constructors use ES6 syntax?

## How do you call a constructor?

```
let blueBird = new Bird();
```

## How do I verify if an object was created by a constructor?

```
crow instanceof Bird; // => true
```

## What are "own properties"?

Properties defined directly on the instance object.

## How do I iterate over the properties of an object?

```
for (let property in duck) {
}
```

## How do I check if a property is an object's own property?

```
  if(duck.hasOwnProperty(property)) {
  }
```

## How do I share a property across all instances of a class?

```
Bird.prototype.numLegs = 2;
```

## Where does the prototype belong?

Part of the constructor

## What are the kinds of properties?

- Own properties
- Prototype properties

## How do I get the constructor of an object?

`object.constructor`

## How is .constructor different from instanceof?

## How do I set multiple properties for a prototype?

```
Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

## What happens to the constructor when an object is assigned to a property?

It gets erased?

## Does instanceof still work though?

Yes:

```
duck.constructor === Bird; // false -- Oops
duck instanceof Bird; // true, still works
```

## How do we fix this?

Manually set the constructor when setting the prototype to an object:

```
Bird.prototype = {
  constructor: Bird,

  // ...
}
```

## What is the relationship of a new object's prototype with its constructor's prototype?

The new object's prototype is inherited from the constructor's prototype:

```
Bird.prototype.isPrototypeOf(duck);
```

## What is the type of prototypes?

```
typeof Bird.prototype; // yields 'object'
```

## Do prototypes have prototypes?

Yes, because a prototype is of object type, and (almost) all objects have prototypes.

## How do I create an object in a manner that respects inheritance?

```
let animal = Object.create(Animal.prototype);
```

## How do I properly let a subclass inherit from a superclass?

```
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

## How do you define a mixin in JS?

```
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

## How do I create a private variable?

Inside the constructor function:

```
function Bird() {
  let hatchedEgg = 10; // private variable
}
```

## What is closure?

When a function has access to the context in which it was created

## How do I grant a method access to a private variable?

```
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
```

## What do we call `(function() {})()`?

Immediately invoked function expression

## Where are IIFEs used?

With modules.
