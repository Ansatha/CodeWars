/*
https://www.codewars.com/kata/5917fbed9f4056205a00001e/train/javascript

Description:

> "What is your name" said Tim. 
"My name" said the mouse "Is Dinglemouse". 

> "What were you before the witch turned you into a mouse" said Rose. 
"I was a banana" said Dingle the mouse, "So be careful. If you see her, run away!".
- Badjelly the Witch (12:32), Spike Milligan

Kata Task

Given a string of letters a, b, n how many different ways can you make the word "banana" by crossing out various letters and then reading left-to-right?

(Use - to indicate a crossed-out letter)

Example

Input

bbananana
Output

b-anana--
b-anan--a
b-ana--na
b-an--ana
b-a--nana
b---anana
-banana--
-banan--a
-bana--na
-ban--ana
-ba--nana
-b--anana
Notes

You must return all possible bananas, but the order does not matter
The example output above is formatted for readability. Please refer to the example tests for expected format of your validOut.

*/

// Solution:
/*
Time Complexity: O(n^2)
*/
var bananas = function(s) {
    let r = {}, re = /^-*b-*a-*n-*a-*n-*a-*$/
    function f(s, i) {
        console.log(s, i);
      if(re.exec(s)) r[s] = true;
      console.log(re.exec(s));
      console.log(r);
      
      if(i < s.length) {
        console.log(s.slice(0,i) + '-' + s.slice(i+1));
        f(s.slice(0,i) + '-' + s.slice(i+1),i+1);
        f(s,i+1);
      };
    };
    f(s, 0);
    return Object.keys(r);
  };

// Try it:
var input = "bbananana";

console.log(bananas(input));