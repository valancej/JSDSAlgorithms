const insertionSort = (arr) => {
    let arrayLength = arr.length;
  
    for (let i = 1; i < arrayLength; i++) {
      
      let key = arr[i];
      let j = i - 1;
      
      while (arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      
      arr[j + 1] = key;
    }
    
    return arr;
  }
  
  let testArray = [4, 3, 1, 13, 12, 4]
  
  insertionSort(testArray);