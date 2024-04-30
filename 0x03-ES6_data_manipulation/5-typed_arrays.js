export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  }
  const array = new ArrayBuffer(length);
  const ArrayView = new DataView(array);
  ArrayView.setInt8(position, value);
  return ArrayView;
}
