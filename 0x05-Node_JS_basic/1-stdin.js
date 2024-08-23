process.stdout.write("Welcome to Holberton School, what is your name?\n");
if (process.stdin.isTTY) {
  process.stdin.on("data", (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on("data", (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on("exit", () => {
    console.log("This important software is now closing");
  });
}
// process.nextTick(() => {
//   console.log("Got triggered in the first iteration of event loop");
// });
// process.nextTick(() => {
//   console.log("Got triggered in the second iteration of event loop");
// });
// setTimeout(() => {
//   console.log("Even after nextTick is executed");
// }, 1000);
// console.log("First text to be printed");
// const process = require("process");
// console.log(process.argv);
// var fs = require("fs");
// fs.createReadStream(__filename).pipe(process.stdout);
// console.log(__filename);
