const numSort = (array) => array.sort((a, b) => a - b);
const minMax = (array) => [numSort(array)[0], numSort(array)[array.length - 1]];
