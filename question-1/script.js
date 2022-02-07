/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)

var N = 100
var a = 1;
var b = 2;

for (i = 2; i <= N; i++) {
  resultado = a + b;
  b = resultado;
  a = b;
  console.log(resultado);
}