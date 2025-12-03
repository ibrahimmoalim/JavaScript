// 'this' in JavaScript refers to the object that the current function is being executed on, determined by how the function is called.

const object2 = {
  a: 2,
  b: this.a
}
console.log(object2.b) // undefined , b/c outside an object method or function method 'this' points to nothing



function logThis(){
  console.log(this)
}
logThis() // undefined , it's inside a function but no method is using "this"
logThis.call('hi') // hi , .call() makes "this" work like a parameter



const object3 = {
  a: 2,
  method(){
    return this.a
  }
}
console.log(object3.method()) // 2 , inside an object method, "this" points to the object



const object4 = {
  a: 2,
  method: () => {
    console.log(this.a)
  }
}
object4.method() // undefined , because arrow functions don’t bind their own `this`



const object5 = {
  name: 'yahya',

  hobbies: ['swimming', 'playing football', 'horse riding'],

  listHobbies() {
    this.hobbies.forEach((hobby) => {
      // "this" inside an arrow function that's inside an object method, points to that object
      console.log(`${this.name} likes ${hobby}`)
    })
  }
}
object5.listHobbies() // yahya likes swimming
                      // yahya likes playing football
                      // yahya likes horse riding