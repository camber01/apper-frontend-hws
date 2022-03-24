function isPalindrome(word) {
    const arr = word.split('')
    let revWord = []
  
    for (let index = arr.length; index >= 0; index--) {
      revWord.push(arr[index])
    }
       
    revWord = revWord.join('')
  
    if(word === revWord)
      return true
    else 
      return false
  }
  
  const checkedPalindrome = isPalindrome('racecar')
  console.log(checkedPalindrome)