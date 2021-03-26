const fs = require("fs").promises;

setInterval(() => {
  fs.unlink("./abcdefg.js");
}, 1000);
/*
(node:20192) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, unlink './abcdefg.js'
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20192) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:20192) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:20192) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, unlink './abcdefg.js'
(node:20192) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
^C
*/
