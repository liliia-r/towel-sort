// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }
    return matrix.reduce((array, arr, index) => {
        if (index % 2 === 0) {
            return array.concat(arr);
        } else if (index % 2 !== 0) {
            return array.concat(arr.reverse());
        }
    });
};
