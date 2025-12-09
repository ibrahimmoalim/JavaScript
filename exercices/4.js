/*
function getLastValue(array){
  const lastIndex=array.length -1
  return array[lastIndex]
}
console.log(getLastValue([1,20,22,24,5]))
console.log(getLastValue(['hi','hello','hey']))

function arraySwap(array){
  const i=array.length-1;
  const lastValue= array[i];
  const firstValue= array[0];
  array[i]=firstValue;
  array[0]=lastValue;
  return array;
}
console.log(arraySwap([1,20,22,24,5]))
console.log(arraySwap(['hi','hello','good']))
*/

/*
for(n=5; n>=0; n-=1){
  console.log(n)
}
*/
/*
let n=0;
while(n<=10){
  console.log(n)
  n+=2
}

let h=5;
while(h>=0){
  console.log(h)
  h-=1
}
*/

/*
const array1=[1,2,3]
const result=[]

for(let i=0; i<array1.length; i++){
  result.push(array1[i]+1);
}
console.log(result)


function addOne(array){
  const result1=[]
  for(let i=0; i<array.length; i++){
    result1.push(array[i]+1);
  }
  return result1;
}
console.log(addOne([1,2,3]))
console.log(addOne([-2, -1, 0, 99]));


function addNum(array2,num){
  const result2=[]
  for(let i=0; i<array2.length; i++){
    result2.push(array2[i]+num)
  }
  return result2;
}
console.log(addNum([1,2,3],2))
console.log(addNum([1,2,3],3))
console.log(addNum([-2,-1,0,99],2))
*/

/*
function countPositive(nums){
  let result4=0;
  for (let i=0; i<nums.length; i++){
    if (nums[i]>0){
      result4++;
    } 
  }
  return result4;
}
console.log(countPositive([1,-3,5]))
console.log(countPositive([2,-4,-5,-6,4,3,6,7]))
*/


function minMax(number){
  const result5={
    min: null,
    max: null
  }

  for (let i=0; i<number.length; i++){
    const value=number[i];

    if (result5.min===null || value<result5.min){
      result5.min=value;
    }

    if (result5.max===null || value>result5.max){
      result5.max=value;
    }
  }
  return result5;
}

console.log(minMax([]))
console.log(minMax([1,4,2,-40,-6,-2,16]))


function countWords(words){
  const wordCount={}

  for (let word of words){
    if (wordCount[word]){
      wordCount[word]++;
    } else {
      wordCount[word]=1;
    }
  }
  return wordCount;
}

console.log(countWords(['apple','banana','apple','apple']))