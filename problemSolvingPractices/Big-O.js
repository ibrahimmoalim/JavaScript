

      // Objects - Big-O

      const person ={
        name: 'ibrahim',
        fatherName: 'mohamed',
        nat: 'som',
        age: 24,
        height: "5'7",
        residence: 'unknown',
        hobbies: 'unknown',
        nickName: 'none'
      }

      person.occupation = 'engineer'  // constant
      delete person.hobbies

      console.log(person)
      console.log(person.age)  // constant
      console.log(Object.values(person).includes('mohamed'))
      console.log(Object.keys(person).includes('height'))
      console.log('age' in person)  //looks for a key (property) named 'age' in "person" object, this doesn't work with values, it's constant time complexity O(1) because objects use hash tables and so the computer knows where exactly that key is located in the memory an gets it
      console.log(Object.keys(person)) // lists all keys and so it's linear time complexity
      console.log(Object.values(person))  //linear
      console.log(Object.entries(person)) //linear



      // Arrays - Big-O

      const array1 =[
        1,2,3,4,5,6,7,8,9
      ]

      array1.push('axmed') // adds an item at the end of an array - 0(1)
      array1.pop()  // removes item from the end of an array, so removes "axmed" - O(1)

      array1.shift() // removes the first item, updates [i] for every item so it's linear time complexity
      array1.unshift(-2)  // adds an item to the beginning of an array, 0(n) for the same reason as above

      array1.splice(3,2)  // deletes "2" items, starting at index "3", so deletes 4 and 5, O(n) for the same reason as .shift
      array1.splice(1,0,-1,0,1)  // adds "-1,0,1" starting from index "1" , the "0" is for not removing anything
      array1.splice(6,0,4,5)


      console.log(array1)
      console.log(array1[5]) // O(1)