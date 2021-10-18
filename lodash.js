//a similar set of functions to the lodash library

//creating an empty object
let _ = {
    //Rounds a number to a given interval
    clamp (number, lower, upper) {
    number;
    lower;
    upper;
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
    },

  //Checks if a number is in the given range
  inRange (number, start, end){
    number;
    start;
    end;
    let temp = 0;

    if(end === undefined){
      end = start;
      start = 0;
    }
      if(start > end){
      temp = start;
      start = end;
      end = temp;
    }
    let isInRange = ((start <= number) && (number < end)) ?   true: false
    return isInRange;
  },

  //Splits a given string to words
  words (aString) {
    return aString.split(' ');
  },

  pad (aString, aLength) {
    if(aLength > aString.length){
      let padding = aLength - aString.length;
      let startPadding = Math.floor(padding/2);
      let endPadding = Math.ceil(padding/2);
      return ' '.repeat(startPadding) + aString + ' '.repeat(endPadding);
    }
    else{
      return aString;
    }
  },

  has (anObject, aKey) {
    let temp = Object.keys(anObject).includes(aKey);
    let check = temp === true? aKey: undefined;
    if(check !== undefined){
      return true;
    }
    else{
      return false;
    }
  },

  invert (anObject) {
    let result = {}

    for(let key in anObject){
      result[anObject[key]] = key;
      }
    return result;
  },

  findKey (object, func) {
    for(key in object){
      let val = object[key];
      let temp = func(val);
      if(temp == true){
        return key;
      }
    }
     return undefined;
  },

  drop (arr, num) {
    if(num === 0){
      return [];
    }else if(num > arr.length){
      return arr;
    }else if(num === undefined){
      arr.shift();
      return arr;
    }else{
      for(let i=0; i<num; i++){
        arr.shift();
      }
        return arr;
    }
  },

  dropWhile (arr, func) {
    let result = arr.findIndex((elem,index) => !func(elem,index, arr));
    return this.drop(arr,result);
  },

  chunk (arr,size) {
    if(size === undefined){
      size = 1;
    }
    let theFinal = [];
    for(let i=0; i<arr.length; i += size){
      let oneSet = arr.slice(i,i+size);
      theFinal.push(oneSet);
    }
    return theFinal;
  },
};



// Do not write or modify code below this line.
module.exports = _;