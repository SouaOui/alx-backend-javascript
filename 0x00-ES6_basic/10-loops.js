export default function appendToEachArrayValue(array, appendString) {
  const arrayResult = [];
  for (const idx of array) {
    arrayResult.push(appendString + idx);
  }

  return arrayResult;
}
