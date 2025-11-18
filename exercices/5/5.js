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

function removeFirstTwoEggs(arr){
  const result = []
  let eggsRemoved = 0
  for (let i=0; i < arr.length; i++){
    if(arr[i] === 'egg' && eggsRemoved < 2){
      eggsRemoved++
      continue
    }
    result.push(arr[i])
  }
  return result;
}
console.log(removeFirstTwoEggs(['egg','apple','egg','egg','orange'])) // ['apple','egg','orange']