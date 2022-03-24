function transform(nums) {
    const sortedSquared= nums.sort().map(nums => nums*nums)
    return sortedSquared
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums)    