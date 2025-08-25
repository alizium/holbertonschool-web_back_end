export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, qty] of map.entries()) {
    if (qty === 1) {
      map.set(item, 100);
    }
  }
  return map;
}
