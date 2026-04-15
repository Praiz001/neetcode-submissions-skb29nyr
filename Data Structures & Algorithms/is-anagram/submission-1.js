class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //early size validation
        if (s.length !== t.length) return false;
        
        //sort args
        const sortedS = [...s].sort().join('');
        const sortedT = [...t].sort().join('');

        return sortedS === sortedT ?? false;
        }
    }
