function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const numbers = [20, 40, 100, 3000];
const sumOfEvens = sumOfEvenNumbers(numbers);
console.log(sumOfEvens);