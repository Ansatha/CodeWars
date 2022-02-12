/*
https://www.codewars.com/kata/590c3173cd3b99c467000a26/train/javascript

Description:

Task

A person is moving along a straight line. Initially he is at point A. He goes to point B from A with speed equal to 1 meter per second. Immediately after reaching B he turns around and heads to A from B with the same speed. After reaching point A he turns around once again and heads to B. etc.

We need an algorithm that identifies the location of the person at any given moment in time(argument t).

It's guaranteed that A and B are two different points.

Input/Output

[input] integer a

Coordinate of point A (in meters).

1 ≤ a ≤ 10^9.

[input] integer b

Coordinate of point B (in meters).

1 ≤ b ≤ 10^9,

b ≠ a.

[input] integer t

A positive integer representing time (in seconds).

3 ≤ t ≤ 10^9.

[output] an integer

Coordinate of the person t seconds after he left A.

Example

For a = 2, b = 4 and t = 3, the output should be 3.


t-->From A to B  0  1  2
                    3     <--B back to A
                 A  |  B
  line --> .--.--.--.--.--.--.--.--.
           0  1  2  3  4  5  6  7  8
For a = 1, b = 10 and t = 8, the output should be 9.


t-->From A to B   0  1  2  3  4  5  6  7  8
                  A                       |  B
      line --> .--.--.--.--.--.--.--.--.--.--.--.
               0  1  2  3  4  5  6  7  8  9 10 11

*/

// Solution:
function toAndFrom(a, b, t) {
    let routeD = b - a;  //Distance between a & b
    let lapsN = Math.floor(t / Math.abs(routeD));  //Nº of completed laps (a->b + b->a)
    let currentD = routeD > 0 ? t % routeD : (t % routeD * -1);  //Distance covered in the current lap

    return lapsN % 2 ? b - currentD : a + currentD;  //Result depending on go:Laps even or went:Laps odd
};

// Try it:
// let a = 10;
// let b = 4;
// let t = 8;

// console.log(toAndFrom(a, b, t));