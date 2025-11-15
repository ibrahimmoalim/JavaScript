      
      const myArray= [1,2,3,4,5,6,7,8,9,10];
      console.log(myArray)

      console.log(myArray[2])

      myArray[1]= 'ibra';
      console.log(myArray)

      const arrays= [1, 'hello',true,{name:'socks', id:'24'}, [3,4]]
      console.log(arrays);
      console.log(Array.isArray(arrays))
      //           ^^ checks if value is an array

      myArray.push(11)
      // add to an element to the end of array
      console.log(myArray)

      // myArray.splice(1,2)
      // //removes "2" values from the array starting from index "1"
      // console.log(myArray)

      // gets a section out of the array starting from index "2" till index "6" but doesn't include the element of index "6"
      console.log(myArray.slice(2,6)) // [3, 4, 5 , 6]
      console.log(myArray.slice(5)) // [6, 7, 8, 9, 10, 11]

      // ".shift" removes the first element of the array, but we can also use this to move an element in an array to another array
      // example: arrays.push(myArray.shift()) => [1, 'hello',...1]
      console.log(myArray.shift()) // 1
      
      // myArray.shift();
      // console.log(myArray)
      

      /*
      let n=1;

      while(n < 5){
        console.log(n)
        n++;
      }
      */

      /*
      for (let n=1; n <= 6; n++){
        console.log(n)
      }

      let randomNumber= 0;

      while (randomNumber < 0.5) {
        randomNumber = Math.random()
      }
      console.log(randomNumber);
      */

      /*
      const todoList= [
        'make dinner',
        'wash dishes',
        'work out',
        'sleep'
      ]

      for (let index=0; index <= todoList.length -1; index++){
        const value=todoList[index];
        console.log(value)
      }
      */  


      // const nums=[1,1,3]
      // let result=0;

      // for (let i =0; i<nums.length; i++){
      //   const num=nums[i]
      //   result+=num
      // }
      // console.log(result)

      // const numsDoubled=[]

      // for (let i =0; i<nums.length; i++){
      //   const num=nums[i]
      //   numsDoubled.push(num*2)
      // } 
      // console.log(numsDoubled)