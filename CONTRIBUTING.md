# Contributing to Riot Examples

If you'd like to contribute an example or bug fix, feel free to send us a pull request. Please make sure to search the issue tracker first for duplicates.

### Make it testable

Create tests for your examples. This is so we can ensure they don't break when future changes are made and it also helps people to understand the processes within.

### Script tags and external libraries

Please make sure to use always the latest riot releases:

- [riot+compiler.min.js](https://rawgit.com/riot/riot/master/riot%2Bcompiler.min.js)
- [riot.js](https://cdn.rawgit.com/riot/riot/master/riot.min.js)

For all the other libraries use either [jsdelivr.com](https://www.jsdelivr.com/) or [cdnjs](https://cdnjs.com/)

### Folder structure

Please follow the standard set by the other examples by using this folder structure suggestion:

- example-tag.css
- example-tag.js
- example-tag.tag
- index.html
- README.md
- package.json
- test/

Not all of these are required, it will differ between examples.

### Coding Guidelines

Follow the coding style established in the rest of the codebase.

**Semicolons**<br>
[No](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
[semicolons](http://inimino.org/~inimino/blog/javascript_semicolons),
[please](https://www.youtube.com/watch?v=gsfbh17Ax9I)!

**Spacing**<br>
Use two spaces for indentation. No tabs.
Spacing around brackets: `if (foo) {` instead of `if(foo){`

**Quotes**<br>
Single-quoted strings are preferred to double-quoted strings.

**Equality Checking**<br>
Prefer `==` over `===` unless it's a must.

**Bitwise Operations**<br>
Prefer classic conditionals `i < 0` over bitwise operators `!~pos`

#### We are happy to accept PRs so thank you in advance!
