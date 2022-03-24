function convertToVowels(word) {
    const arr = word.split('')
    let vowels = []  
  
    for (let index = 0; index < arr.length; index++) {
      switch(arr[index]){
        case 'a': vowels.push(arr[index]);
          break;
        case 'e': vowels.push(arr[index]);
          break;
        case 'i': vowels.push(arr[index]);
          break;
        case 'o': vowels.push(arr[index]);
          break;
        case 'u': vowels.push(arr[index]);
          break;
      }
    }
    vowels = vowels.join('')
    return vowels
  }
  
  const extractedVowels = convertToVowels('hello world')
  console.log(extractedVowels)