/*
https://www.codewars.com/kata/5919f3bf6589022915000023

Description:

In this kata your mission is to rotate matrix counter - clockwise N-times.

So, you will have 2 inputs:

1)matrix

2)a number, how many times to turn it
And an output is turned matrix.
Example:

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]]
      
times_to_turn = 1
It should return this:

[[4, 8, 12, 16],
 [3, 7, 11, 15],
 [2, 6, 10, 14],
 [1, 5, 9, 13]])
Note: all matrixes will be square. Also random tests will have big numbers in input (times to turn)

Happy coding!

*/

// Solution:
/*
function coords (rotationTimes, arrSize, actualPosX, actualPosY) {
    if (rotationTimes == 1) return [arrSize - actualPosY, actualPosX];
    if (rotationTimes == 2) return [arrSize - actualPosX, arrSize - actualPosY];
    if (rotationTimes == 3) return [actualPosY, arrSize - actualPosX];
}

function rotateAgainstClockwise(matrix, times) {
    times = times % 4;
    let n = matrix.length-1;
    if (times == 0) return matrix;
    let result = JSON.parse(JSON.stringify(matrix));
    for (x = 0; x <= n; x++) {
        for (y = 0; y <= n; y++) {
            let newXY = coords (times, n, x, y);
            result[newXY[0]][newXY[1]] = matrix[x][y];
        };
    };
    return result;
};

// Time Complexity: O(n^2)
*/


/*
Obra de arte!!!
Yo giro el array original directamente 1, 2 o 3 veces segun pidan con un algoritmo para cada opcion,
pero este tipo, solo usa el algoritmo de 1 giro y lo repite reciclando la misma función tantas veces
como giros sean necesarios:
*/

function rotateAgainstClockwise(m, n) {
    n %= 4;
    if (n === 0) return m;
    return rotateAgainstClockwise(m[0].map((_, i) => m.map(r => r[i])).reverse(), n - 1);
}
/*
Time Complexity: O(n)
*/

// Try it:
// const matrix = [['a', 'b', 'c', 'd'],
//               ['e', 'f', 'g', 'h'],
//               ['i', 'j', 'k', 'l'],
//               ['m', 'n', 'o', 'p']];
// let times = 31;
// console.log(matrix);
// console.log(rotateAgainstClockwise(matrix, times));


