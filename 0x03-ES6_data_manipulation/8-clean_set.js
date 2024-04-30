export default function cleanSet(set, startString) {
  const resultString = [];
  set.forEach((element) => {
    if (startString !== '' && element.startsWith(startString)) {
      resultString.push(element.substring(startString.length));
    }
  });
  const concatString = resultString.join('-');
  return concatString;
}
