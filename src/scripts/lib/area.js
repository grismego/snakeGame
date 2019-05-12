export const createArea = (rows, cols) => {
  let array = new Array();
  for (let i=0; i < rows; i++) {
    array[i] = new Array();
    for (let j = 0; j < cols; j++) {
      array[i][j] = null;
    }
  }
  return array;
};