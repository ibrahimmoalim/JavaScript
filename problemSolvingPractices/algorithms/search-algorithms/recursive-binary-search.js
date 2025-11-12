function recursiveBinarySearch(array, target){
  array.sort((a,b) => a - b);
  return search(array, target, 0, array.length -1)
}

function search(array, target, left, right){
  if (left > right){
    return -1
  }

  let mid = Math.floor((left + right) /2);

  if (target === array[mid]){
    return mid;
  }

  if (target > array[mid]){
    return search(array, target, mid +1, right)
  } else {
    return search(array, target, left, mid -1)  
  }
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10)) // 4
console.log(recursiveBinarySearch([-5,2,4,6,10], 6))  // 3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20))  // -1

console.log(recursiveBinarySearch([6,12,-2,1,5], 5))  // 2
console.log(recursiveBinarySearch([6,12,-2,1,5], 1))  // 1
console.log(recursiveBinarySearch([6,12,-2,1,5], 30))  // -1