
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined || matrix[0] == undefined) {
    return [];
  };
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i].sort((a, b) => b - a);
    } else {
      matrix[i].sort((a, b) => a - b);
    };
  };
  matrix.forEach( (item) => result.push(... item) );
  return result;
};