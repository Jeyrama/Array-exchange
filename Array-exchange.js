/*
It's time for some array exchange! The objective is simple -
exchange the elements of two arrays in-place in a way that their new content is also reversed.

Example:
  const myArray = ['a', 'b', 'c'];
  const otherArray = [1, 2, 3];

  exchangeWith(myArray, otherArray);

  myArray => [3, 2, 1]
  otherArray => ['c', 'b', 'a']
*/


// Solution

const clearArray = (arr) => {
  let size = arr.length;
  for(let i = 0; i < size;i++) {
      arr.pop();
  }
}
const exchangeWith = (a,b) => {
  let temp1 = a.slice();
  let temp2 = b.slice();
  clearArray(a);
  clearArray(b);
  for(let i = 0; i < temp2.length;i++) {
      a.push(temp2[i]);
  }
  for(let i = 0; i < temp1.length;i++) {
      b.push(temp1[i]);
  }
  a.reverse();
  b.reverse();
}