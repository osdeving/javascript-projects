// função que junta dois arrays
function merge (arr1, arr2) {
  let cur1 = 0
  let cur2 = 0

  const arr = []

  while (cur1 < arr1.length && cur2 < arr2.length) { arr1[cur1] < arr2[cur2] ? arr.push(arr1[cur1++]) : arr.push(arr2[cur2++]) }

  while (cur1 < arr1.length) arr.push(arr1[cur1++])

  while (cur2 < arr2.length) arr.push(arr2[cur2++])

  return arr
}

// função que ordena um array
function mergeSort (arr, lvl = 0) {
  console.log(`### ${lvl} -> recebi o array: ${arr}`)

  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid), lvl + 1)
    const right = mergeSort(arr.slice(mid, arr.length), lvl + 1)

    arr = merge(left, right)
  }

  console.log(`<<< ${lvl} -> retornei o array: ${arr}`)
  return arr
}

// const arr = [30, 20, 10, 50, 70, 100, 80, 90, 40, 60]
const arr = [30, 20, 10, 40]

console.log(mergeSort(arr))
