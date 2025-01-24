function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];

let combinedArray = combineArrays(arr1, arr2); // Type 'string | number' is not assignable to type 'number'.
console.log(combinedArray);