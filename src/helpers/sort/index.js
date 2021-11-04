/**
 * This function sorts the array in ascending and descending order
 * 
 * @param {arr} the array in which the main types to be sorted are found
 * @param {string} this string is a key that the array is being sorted by
 * @param {bool} this  determines the order of the sorting
 */

const sortFunc = (charArr, sortBy, order) => {
    return charArr.sort((a, b) => {
        if (a[sortBy] < b[sortBy]){
            return order ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]){
            return order ? 1 : -1;
        }
        return 0;
    })
  };
  
  export default sortFunc;