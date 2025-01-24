function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = combineArrays(arr1, arr2); 
console.log(combinedArray); //This will work correctly

let arr3 = ["a", "b", "c"];
let arr4 = ["d", "e", "f"];

let combinedArray2 = combineArrays(arr3, arr4);
console.log(combinedArray2); //This will work correctly