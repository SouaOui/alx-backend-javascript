import setFromArray from "./6-set";
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
