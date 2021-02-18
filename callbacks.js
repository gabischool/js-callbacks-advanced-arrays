// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/


function getLength(arr, cb) {
  return cb(items)
}
console.log(items)

  // getLength passes the length of the array into the callback.

function last(arr, cb) {
const cb = aniga => {
  console.log(aniga);
}

function last(arr, cb) {
  return cb(arr[arr.length - 1])
}
last(items, cb);
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  return cb(x + y);
}
sumNums(7, 8, (sum) => console.log(`The sum is ${sum}`));
sumNums(7, 1, (sum) => {
  for (let x =o; x <sum; x++){
    console.log(`${sum} - ${x} = ${sum-x}`);
  }
});
  // sumNums adds two numbers (x, y) and passes the result to the callback.

function multiplyNums(x, y, cb) {
    return cb(x * y);
  }
  const ten = 10;
  multiplyNums(ten, ten, (product) => console.log(`The product of ${ten} and ${ten} is ${product}.`));
  
  // multiplyNums multiplies two numbers and passes the result to the callback.

function contains(item, list, cb) {
  return cb(list.find((arrayItem) => arrayItem === Item));
};

const item1

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
