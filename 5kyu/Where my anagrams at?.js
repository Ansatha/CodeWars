/*
https://www.codewars.com/kata/523a86aa4230ebb5420001e1

Description:

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.

*/

// Solution:
function anagrams(word, words) {
  let result = [];
  let wordToCheckSorted = word.split('').sort();
  for(i = 0; i < words.length; i++){
    let wordOfWordsSorted = words[i].split('').sort();
    let letterIndex = 0;
    let checker = true;
    while(wordToCheckSorted.length === wordOfWordsSorted.length && letterIndex < wordOfWordsSorted.length && checker){
      if(wordOfWordsSorted[letterIndex] !== wordToCheckSorted[letterIndex]) checker = false;
      else letterIndex++;
    };
    if(letterIndex == 0) checker = false;
    if(checker) result.push(words[i]);
  };
  return result;
};

// Try it:
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));