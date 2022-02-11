/*
https://www.codewars.com/kata/bird-mountain

Description:

Kata Task

A bird flying high above a mountain range is able to estimate the height of the highest peak.

Can you?

Example

The birds-eye view:
^^^^^^
 ^^^^^^^^
  ^^^^^^^
  ^^^^^
  ^^^^^^^^^^^
  ^^^^^^
  ^^^^

The bird-brain calculations:
111111
 1^^^^111
  1^^^^11
  1^^^1
  1^^^^111111
  1^^^11
  1111

111111
 12222111
  12^^211
  12^21
  12^^2111111
  122211
  1111

111111
 12222111
  1233211
  12321
  12332111111
  122211
  1111

Height = 3

*/

// Solution:
function peakHeight(mountain, heigth = 0) {
    // If all items are: ' ' returns the anwser (heigth)
    if(mountain.every(layer => layer.every(dot => dot === " "))) return heigth;
    // Else, search for each heigth edges on mountain array and saves the new array
    let afterEdgeCheck = mountain.map((layer,i) => layer.map((dot, j) => {
      // Check the status of every position around de current position
      let up = mountain[i-1] ? mountain[i-1][j] : " ";
      let down = mountain[i+1] ? mountain[i+1][j] : " ";
      let left = mountain[i][j-1] || " ";
      let right = mountain[i][j+1] || " ";
      // If is and edge is changed from '^' to ' ', else is not changed
      return [up,down,left,right].includes(" ") ? " " : dot;
    }));
    // Call recursively the function with the new mountain array
    return peakHeight(afterEdgeCheck, ++heigth);
};

// Try it:
// var mountain = [
//     "^^^^^^        ".split(''),
//     " ^^^^^^^^     ".split(''),
//     "  ^^^^^^^     ".split(''),
//     "  ^^^^^       ".split(''),
//     "  ^^^^^^^^^^^ ".split(''),
//     "  ^^^^^^      ".split(''),
//     "  ^^^^        ".split('')
// ];

// console.log(peakHeight(mountain));