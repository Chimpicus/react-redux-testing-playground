//Fizz Buzz built with typescript that is also an Imediately Invoked Function Expression (IIFE)

(() => {
  const output = [];
  let i: number = null;
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
  // eslint-disable-next-line
  console.log(output);
})();

