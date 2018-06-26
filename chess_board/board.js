// create a string of 8x8x grid alternating # and ' ' 

// prompt user for size and symbol
size = prompt('pick board size')
symbol = prompt('pick a symbol')

// make an array to push elements into with intent to turn into string later
arrBoard = []

// create loop to specify height 
for (i = 0; i < size; i++){

  //specify symbol
  symbolAdd = symbol
  spaceAdd = ' '

  //create two alternate loops to create different patterns
  if (i % 2 === 0){
  for (y = 0; y < size; y++){
    arrBoard.push(symbolAdd)
    arrBoard.push(spaceAdd)
  }
} else {
  for (z = 0; z < size; z++) {
    arrBoard.push(spaceAdd)
    arrBoard.push(symbolAdd)
  }
}
  // line break
  arrBoard.push('\n')

}

// change the array to a string

boardString = arrBoard.join('')

//log result

console.log(boardString)
