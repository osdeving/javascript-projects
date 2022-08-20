function selectionSort(arr) {
  
  for (let current = 0; current < arr.length; current++) {
    
    let analisys = current;
    
    while(analisys > 0 && arr[analisys] < arr[analisys - 1]) {
      let tmp = arr[analisys - 1]
      
      arr[analisys - 1] = arr[analisys]
      arr[analisys] = tmp
      
      analisys--;    
    }
    
  }
}

const arr = [30, 20, 10, 50, 70, 100, 80, 90, 40, 60]

//console.log(`before sort: ${arr}`)

//selectionSort(arr)

//console.log(`after sort: ${arr}`)


// merge two arrays already sorted into one

