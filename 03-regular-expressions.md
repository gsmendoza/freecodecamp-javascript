## How do I determine if a regex matches a string?

/regex/.test(string)

## What regex operator do I use to search for multiple patterns?

Alternation or OR operator: |

```
 /yes|no|maybe/
 ```

## How do I extract the actual matches of a pattern in a string?

```
"Hello, World!".match(/Hello/);
```

## What is wildcard?

`.`

## What is a negated character set?

`[^abc]`

## What is a greedy match?

The longest possible part of a string that fits the regex pattern and returns it as a match

## What is a lazy match?

The smallest possible part of the string that satisfies the regex pattern

## What is the default matching strategy?

Greedy

## How do I specify a lazy match?

`/t[a-z]*?i/`

## What does \w match?

`[A-Za-z0-9_]`

## What are shorthand character classes?

\w etc

## How to I specify upper and lower number of patterns?

With quantity specifiers:

```
let multipleA = /a{3,5}h/;
```

## How to I specify only a lower number of patterns?

```
let multipleA = /ha{3,}h/;
```

## How to I specify exact number of patterns?

```
let multipleHA = /ha{3}h/;
```

## What is a lookahead?

A pattern that tell JavaScript to look-ahead in your string to check for patterns further along

## What is a positive lookahead?

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.

```
let quit = "qu";
let quRegex= /q(?=u)/;
quit.match(quRegex); // Returns ["q"]
```

## What is a negative lookahead?

A negative lookahead will look to make sure the element in the search pattern is not there.

```
let noquit = "qt";
let qRegex = /q(?!u)/;
noquit.match(qRegex); // Returns ["q"]
```

## How can you check two or more patterns in one string?

```
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

## How do we specify a pattern where the subpattern is repeated?

With capture groups:

```
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

## How do I search and replace?

```
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```
