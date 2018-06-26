console.log('plaindrome tester on')


// assingment 

// Return true if the given string is a palindrome.Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.



// create a function that test a string and returns a true or false



function isPalindrome(str) {
  punctuation = /[\W\s]/g
  strReverse = str.toLowerCase().replace(punctuation, '').split('').reverse().join('')

  if (str.toLowerCase().replace(punctuation, '') === strReverse){
    return true
  } else {
    return false
  }
  
}