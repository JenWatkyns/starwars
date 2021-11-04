/**
 * This function sums up the heights in the array
 * 
 * @param {array} the array in which the type to be summed up is found
 */

const sumFunc = (charArr) => {
    return charArr.reduce((accumulator, curr) => {
        if (isNaN(curr.height)) return accumulator;
        return accumulator + curr.height;
    }, 0)
  };
  
  export default sumFunc;
