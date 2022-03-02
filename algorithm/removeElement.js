/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // nums.forEach(index=>{
    //     console.log(index)
    //     if(nums[index]==val){

    //         nums.splice(index)}
    // })
    let del = []
    for (i in nums) {
        if (nums[i] == val) {
            del.push(i)
        }
    }
    del.reverse()
    del.forEach(i => {
        nums.splice(i,1)
    });
    
    return nums
};

removeElement([0,1,2,2,3,0,4,2], 2)
//不是我夸你们Java，用着确实比js好用