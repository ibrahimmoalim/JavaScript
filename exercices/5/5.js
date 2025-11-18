// arrays and loops exercises

// function findSearch(arr){
//   for (let i=0; i < arr.length; i++){
//     if (arr[i] === 'search'){
//       return i
//     }
//   }
//   return -1
// }
// console.log(findSearch(['hello','world','search','good'])) // 2
// console.log(findSearch(['hello','world','good'])) // -1



// function findSearch1(arr){
//   let index = -1
//   for (let i=0; i < arr.length; i++){
//     if (arr[i] === 'search'){
//       index = i
//       break
//     }
//   }
//   return index
// }
// console.log(findSearch1(['hello','world','search','good','search'])) // 2
// console.log(findSearch1(['hello','world','good'])) // -1


// function findSearch1(arr, str){
//   let index = ''
//   for (let i=0; i < arr.length; i++){
//     if (arr[i] === str){
//       return index += i
//     }
//   }
//   return -1
// }
// console.log(findSearch1(['lime','green','red','yellow','red','blue'], 'red')) // 2
// console.log(findSearch1(['white','black','grey'], 'red')) // -1

// function removeFirstTwoEggs1(arr){
//   const result = []
//   let eggsRemoved = 0
//   for (let i=0; i < arr.length; i++){
//     if(arr[i] === 'egg' && eggsRemoved < 2){
//       eggsRemoved++
//       continue
//     }
//     result.push(arr[i])
//   }
//   return result;
// }
// console.log(removeFirstTwoEggs1(['egg','apple','egg','egg','orange'])) // ['apple','egg','orange']

// function removeFirstTwoEggs2(arr){
//   const arrCopy = arr.slice();
//   arrCopy.reverse();

//   const result = [];
//   let eggsRemoved = 0;
//   for (let i=0; i < arrCopy.length; i++){
//     if(arrCopy[i] === 'egg' && eggsRemoved < 2){
//       eggsRemoved++;
//       continue;
//     }
//     result.push(arrCopy[i]);
//   }
//   return result.reverse();
// }
// console.log(removeFirstTwoEggs2(['egg','apple','egg','egg','orange'])) // ['egg','apple','orange']


function fizzBuzz(){
  const result = []
  for (let i=1; i <= 20; i++){
    if (i % 3 === 0 && i % 5 === 0){
      result.push('FizzBuzz')
      continue
    }

    if (i % 3 === 0){
      result.push('Fizz')
      continue
    }

    if (i % 5 === 0){
      result.push('Buzz')
      continue
    }
    result.push(i)
  }
  return result;
}

// console.log(fizzBuzz()) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz']


function unique(arr){
  return [...new Set(arr)];
}

console.log(unique(['red','green','green','red'])) // [ 'red', 'green' ]
console.log(unique(['green','red','bule','red'])) // [ 'green', 'red', 'bule' ]