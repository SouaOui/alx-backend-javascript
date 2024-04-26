export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    if (denominator !== 0) {
      const result = numerator / denominator;
      resolve(result);
    } else {
      reject(new Error('Cannot divide by 0'));
    }
  });
}
