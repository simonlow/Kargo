const stringArray = require('./stringArray.js');

let strs = process.argv;
let newStrs = [];
for (let i = 2; i < strs.length; i++) {
    newStrs[i-2] = strs[i];
}
console.log(stringArray(newStrs));
