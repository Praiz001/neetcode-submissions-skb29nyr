class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //early size validation
        if (s.length !== t.length) return false;

        //create a copy of args
        const sCopy = [...s];
        const tCopy = [...t];
        
        //sort both arg
        const sortedS = sCopy.sort();
        const sortedT = tCopy.sort();

        //compare equality
        for (let i = 0; i < sortedS.length; i++){
            if (sortedS[i].toLowerCase() !== sortedT[i].toLowerCase()) {
                return false;
            }
        }

        return true;
        }
    }
