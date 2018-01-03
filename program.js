// Exercise 1 of 12
// console.log('HELLO WORLD');

// Exercise 2 of 12
let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
