/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

*/

let mArray = [2,2,1,3,4,5,1,1,2,2]

function hasMajority(arr){
  
  let hMap = {}
  
  arr.forEach(el=>{
    hMap[`${el}`] = (parseInt(hMap[`${el}`], 10)||0)+1
  })

  let majorityNum = Math.floor(arr.length/2)

  let nums = []
  Object.values(hMap).forEach(el=>{
    
    if (el>majorityNum) {
      nums.push(el)
    }
  })
  
  return nums.length==0?false:true
}


console.log(mArray,"has majority number:",hasMajority(mArray));
