//Fizz Buzz built with typescript that is also an Imediately Invoked Function Expression (IIFE)

const fizzbuzz = (() => {
  const output = [];
  let i: number;
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      output.push("Fizz");
    }
    else if (i % 5 === 0) {
      output.push("Buzz");
    } else { output.push(i); }
  }
  return output;
  // eslint-disable-next-line
  console.log(output);
})();
// eslint-disable-next-line
module.exports = fizzbuzz;