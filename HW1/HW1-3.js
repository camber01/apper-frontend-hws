function reverse(arr) {
    const word = arr.split('')
    const rev = []
   
    for (let index = word.length; index >= 0; index--) {
      rev.push(word[index])
    }
    return rev.join('')
}

const arr = 'hello'
const reversedWord = reverse(arr)
console.log(reversedWord) // 'olleh'