let arr = [25, 15, 30, 50, 45, 20];


function bubblesort(arr) {
    min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] < min) {
                arr[j] = min;
            }
        }

    }
}



console.log(`unsorted array = ${arr}`)

bubblesort(arr)

console.log(`sorted array = ${arr}`)