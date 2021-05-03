import './main.js';

export function outString () {
    let strs = process.argv;
    console.log(stringArray(strs));
}

module.exports = outString