export const generatePoints = n => Array.from({length: n}, (item, index) => ({
  title: `Point ${++index}`, coordinates: [10 * index + index, 10 * index + index]
}));
