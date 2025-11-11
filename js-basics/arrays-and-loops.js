      /*
      const myArray= [10,20,30,40];
      console.log(myArray)

      console.log(myArray[2])

      myArray[1]= 'ibra';
      console.log(myArray)

      const arrays= [1, 'hello',true,{name:'socks', id:'24'}, [3,4]]
      console.log(arrays);
      console.log(Array.isArray([1, 'hello',true,{name:'socks', id:'24'}, [3,4]]))
      //           ^^ checks if value is an array

      myArray.push(50)
      // add to an array
      console.log(myArray)

      myArray.splice(1,2)
      //remove values from an array
      console.log(myArray)
      */

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


      const nums=[1,1,3]
      let result=0;

      for (let i =0; i<nums.length; i++){
        const num=nums[i]
        result+=num
      }
      console.log(result)

      const numsDoubled=[]

      for (let i =0; i<nums.length; i++){
        const num=nums[i]
        numsDoubled.push(num*2)
      } 
      console.log(numsDoubled)