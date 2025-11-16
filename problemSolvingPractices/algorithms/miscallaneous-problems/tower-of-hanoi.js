function towerOfHanoi(n, fromRod, toRod, usingRod){
  if (n === 1){
    console.log(`move disk 1 from ${fromRod} to ${toRod}`)
    return
  }

  towerOfHanoi(n-1, fromRod, usingRod, toRod)
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n-1, usingRod, toRod, fromRod)
}

towerOfHanoi(4, 'a', 'c', 'b')

// Big-O = O(2^n -1)
// approximated to O(2^n)