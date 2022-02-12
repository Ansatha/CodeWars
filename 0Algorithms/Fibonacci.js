/*
fib(n, list) => fibonacci succesion(list=true) or nth element(list=false)
Time Complexity: O(n)
*/

function fib (num, list = true) {
    
    if(typeof(num)!=='number' || num <= 0 || num === NaN) 
        return '\nERROR:\nInsert a number > 0';
    
    if(num === 1) return 0;

    let result = [0, 1];
    for(i = 2; i < num; i++) {
        result.push(result[i-2] + result[i-1]);
    };

    return list ? result : result.pop();
};

console.log(fib(5,false));