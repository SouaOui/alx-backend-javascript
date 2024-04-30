export default function cleanSet(set, startString) {
  const resultString = [];
  if (
    !set ||
    !startString ||
    !(set instanceof Set) ||
    typeof startString !== "string"
  ) {
    return "";
  }
  set.forEach((element) => {
    if (
      typeof element === "string" &&
      startString !== "" &&
      element.startsWith(startString)
    ) {
      const value = element.substring(startString.length);
      if (value && value !== element) {
        resultString.push(value);
      }
    }
  });
  return resultString.join("-");
}
