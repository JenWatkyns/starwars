/**
 * This function filters genders by type
 * 
 * @param {arr} the array in which the gender can be found
 * @param {string} this string states the tyoe of gender
 */

const filterFunc = (charArr, gender) => {
    return charArr.filter((char) => {
        if (gender === "other") {
            return char.gender !== "male" && char.gender !== "female"
        }
        return char.gender === gender;
    })
  };
  
  export default filterFunc;