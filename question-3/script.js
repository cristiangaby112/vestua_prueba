/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
const char ={
  '{' : '}',
  '(' : ')',
  '[' : ']',
}

function parenthesisChecker(str) {
const apertura = [];

for (let i = 0; i<str.length; i++) {
  if(char[str[i]]){
    apertura.push(str[i])
  }else{
    let ultimo = apertura.pop();
    if(char[ultimo] !== str[i]){
      return false;
    }
  }
}

  return !apertura.length;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);

