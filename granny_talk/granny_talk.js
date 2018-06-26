// Write a
// function 'grannyTalk'
// what takes a question as an argument and returns a string as her response.

// If you talk to Granny normally, she 'll reply "SPEAK UP SONNY JIM"

// If you talk to her in ALL CAPS, she 'll reply "NO, NOT SINCE 1945"

// The year will be a random year between 1930 and 1950.

// If you say "BYE"
// to her she 'll reply "What'
// s that honey, I didn 't hear you.."

var question = prompt('what do you want to ask Granny?')

grandmaTime = Math.floor(Math.random() * (1950 - 1930 + 1)) + 1930;

function isUpperCase(str) {
  return str === str.toUppercase()
}


function grannyTalk() {
  var granResponse = ''

  if (question === 'BYE'){
    granResponse = 'What\'s that honey, I didn \'t hear you..'
  } else if (question == question.toUpperCase()) {
    granResponse = ('NO NOT SINCE, ' + grandmaTime)
  } else {
    granResponse = 'SPEAK UP SONNY JIM'
  }
  return granResponse
}

// bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and 
// interpret her responses incorrectly by swapping vowels randomly in the words of her responses.
function randomVowel(){
var vowels = ['a', 'e', 'i', 'o', 'u']
return vowels[(Math.floor(Math.random() * 5))]
}

function granpaTalk() {
  var granpaResponse = grannyTalk()
  // find out how to make a RegExp expression to cover all the vowels
  granpaResponse.replace(([AEIOUaeiou]), randomVowel())

  return granpaResponse
}