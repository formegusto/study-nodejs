// dep-run.js
const dep1 = require("./dep1");
const dep2 = require("./dep2");

dep1();
dep2();

/*
require dep1 {}
require dep2 [Function (anonymous)]
dep2 [Function (anonymous)]
dep1 {}
(node:3593) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:3593) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
(node:3593) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
(node:3593) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency
(node:3593) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
(node:3593) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
(node:3593) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
(node:3593) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency
*/
