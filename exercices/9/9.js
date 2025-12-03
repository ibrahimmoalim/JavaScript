class Car {
  #brand;
  #model;
  
  constructor(carBrand, carModel) {
    this.#brand = carBrand
    this.#model = carModel
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  openTrunk(){
    if (this.speed === 0){
      return this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    return this.isTrunkOpen = false;
  }

  go(){
    if (this.speed < 200 && !this.isTrunkOpen){
      return this.speed += 5
    }
  }

  brake(){
    if (this.speed > 0)
    return this.speed -= 5
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model}, ${this.speed} km/h, ${this.isTrunkOpen}`)
  }
}


const car1 = new Car('Toyota', 'Corolla')
const car2 = new Car('Tesla', 'Model 3')

car1.openTrunk()
car2.openTrunk()

car2.closeTrunk()


car1.go()
car1.go()
car1.go()

car2.go()
car2.go()
car2.go()
car2.go()
car2.brake() // 15

console.log(car1) // Car { brand: 'Toyota', model: 'Corolla', speed: 0, isTrunkOpen: true }
console.log(car2) // Car { brand: 'Tesla', model: 'Model 3', speed: 15, isTrunkOpen: false }

car1.displayInfo() // Toyota Corolla, 0 km/h, true
car2.displayInfo() // Tesla Model 3, 15 km/h, false



class RaceCar extends Car {
  acceleration = 0;

  constructor(carBrand, carModel, carAcceleration){
    super(carBrand, carModel)
    this.acceleration = carAcceleration;
    this.isTrunkOpen = 'race cars do not have a trunk.'
  }

  go(){
    if (this.speed <= 300){
      return this.speed += this.acceleration;
    }
  }

  openTrunk(){
    return null
  }
  closeTrunk(){
    return null
  }
}

const car3 = new RaceCar('McLaren', 'F1', 20)

car3.openTrunk()
car3.openTrunk()
car3.closeTrunk()

car3.go()
car3.go()
car3.go()
car3.go()
car3.go()

console.log(car3) // Car { brand: 'McLaren', model: 'F1', speed: 100, isTrunkOpen: 'race cars do not have a trunk' }

car3.displayInfo() // McLaren F1, 100 km/h, race cars do not have a trunk