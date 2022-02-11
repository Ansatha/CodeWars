/*
https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript

Description:

Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

*/

// Solution:
function removeZeros(array) {
    let i = 0;  // Array index driver var
    let count = array.length;   // Cicles limit var
    
    while (i < array.length && count > 0) {   // Check each array element
        if(array[i] === 0 || array[i] === '0') {   // if 0 || '0' is found: 
            let save = i;   // Save the index position to continue from here in next iteration
            let simb = array[i];  // Save the kind of zero (0 || '0')
      
            while(i < array.length) {  // Check each array element from the zero element to last one
                array[i] = array[i+1]; // Move left each array element from the zero element to last one
                i++;
            };
            
            array[array.length-1] = simb; // Change the last arrray element with (0 || '0')
            i = save; // Take back previus i value to check array element
        }
        else i++; // Increase i to check next array element       
        count--;  // Controlling the script only checks once per array element
    };

    return array;
};

// Try it:
let array = [7, false, '3', null, 4, 6, '0', 0, 13, 0, 78, 0, 0, 19, 14];

console.log(removeZeros(array));