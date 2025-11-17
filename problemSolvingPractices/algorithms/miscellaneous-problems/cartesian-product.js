// cartesian product of two sets

function cartesianProduct(arr, arr2){

  const prod = []

  for (n of arr){
    for (i of arr2){
      prod.push([n, i])
    }
  }

  return prod;
}

console.log(cartesianProduct([1, 2], [3, 4, 5])) // [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

// Big-O = O(nm) -> linear1*linear2, (array1 = O(n) & array2 = O(m)) since they have different length
// if both arrays have same lenght, then Big-O = O(n^2) -> quadratic