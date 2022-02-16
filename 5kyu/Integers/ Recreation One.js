function listSquared(m, n) {
            // Creating array with elements from m to n.
    return  Array(n - m + 1).fill(m).map((x, y) => x + y)
            // Changing every element into: [element, sumDivs^2].
            .map(d => {
                let div = [d];
                for(i = 1 ; i <= d/2; i++){
                    if (d % i == 0) div.push(i)
                };
                return [d, div.map(d => d * d).reduce((d1, d2) => d1 + d2, 0)];
            })
            // Keeping only the elments which sumDivs^2 == perfect square.
            .filter(g => Number.isInteger(Math.sqrt(g[1],2)));
};
/*
Time Complexity: O(n)
*/


let m = 1;
let n = 250;
console.log(listSquared(m, n));