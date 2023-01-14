const arr = [1, 2, 3, 4, 5, 6, 7];
arr[7] = 8;
arr[9] = 10;
arr.push(11);

function arrayBasics() {
  console.log(arr);
  console.log('array length:', arr.length);
  console.log('array first value:', arr[0]);
}

function iterateArrayByIndex() {
  // for (in) -> avoid undefined values
  for (const index in arr) {
    console.log(`index: ${index} in arr is: ${arr[index]}`);
  }
}

function iterateArrayByValue() {
  for (const value of arr) {
    console.log(`value: ${value}`);
  }
}

// arrayBasics();
// iterateArrayByIndex();
iterateArrayByValue();
