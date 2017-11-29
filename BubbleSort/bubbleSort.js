const bubbleSort = (arr) => {
  let arrayLength = arr.length;

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arrayLength; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

let testArray = [8, 3, 7, 1, 3];

bubbleSort(testArray);
