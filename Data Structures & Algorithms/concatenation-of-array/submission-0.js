class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const rounds = 2;
        let ans = [];

        //map through nums 2x
        for (let i = 0; i < rounds; i++ ) {
            for (let num of nums) {
                ans.push(num)
            }
        }

        return ans;
    }
}