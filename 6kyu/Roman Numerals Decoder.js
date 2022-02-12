/*
https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

Description:

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

*/

// Solution:
function solution (roman) {
    const symbols = {'M':1000, 'D':500, 'C':100,
                    'L':50, 'X':10, 'V':5, 'I':1};

    let result = roman.split('') // Convert input string into array
                      .map(r => symbols[r]) // Replace Romans by Numbers
                      .map((n, i, a) => n < a[i+1] ? -n : n) // Replace sustraccion by negative numbers
                      .reduce((a, b) => a + b); // Calculate the total
    return result;
};

// Try it:

let roman = 'MCMXCIX';
console.log(solution(roman));