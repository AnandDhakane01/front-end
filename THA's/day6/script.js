

// js function to check whether the input is an array\
function checkifArr(x) {
    return Array.isArray(x);
}
console.log("Question 1:");
console.log(checkifArr([1, 2, 3, 0]));
console.log(checkifArr('w3resources'));
console.log("\n");



// js function to clone an array
function cloneArr(x) {
    // return [...x];
    return x.slice();
}
console.log("Question 2:");
console.log(cloneArr([1, 2, [4, 0]]))
console.log("\n");




// get the first n elements from an arr
function first(arr, k) {
    k = k || 0;

    let res = [];
    for (let i = 0; i <= k; i++) {
        res.push(arr[i]);
    }
    return res;
}
console.log("Question 3:");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("\n");



// join all elements into a string
function join(arr) {
    return arr.join(',');
}
console.log("Question 4:");
console.log(join(["Red", "Green", "White", "Black"]));
console.log("\n");



// find most frequent item in an array
function findMostFrequent(arr) {
    var ans = 0;
    var temp = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                temp += 1;
            }
        }
        if (temp > ans) {
            ans = temp;
        }
        temp = 1;
    }
    return ans;
}
console.log("Question 5:");
console.log(findMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log("\n");
