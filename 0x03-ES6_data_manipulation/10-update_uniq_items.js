export default function updateUniqueItems(GroceryMap) {
  if (!(GroceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  GroceryMap.forEach((quantity, name) => {
    if (quantity === 1) {
      GroceryMap.set(name, 100);
    }
  });
  return GroceryMap;
}
