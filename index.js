const findMinAndRemoveSorted = (array) =>{
    return array.shift()

}

const merge = (firstArray,secondArray) =>{
    let sorted = []
    while (firstArray.length !=0 && secondArray.length != 0){
       if (firstArray[0] < secondArray[0]){
            let currentMin = findMinAndRemoveSorted(firstArray)
            sorted.push(currentMin)
       }else{
            let currentMin = findMinAndRemoveSorted(secondArray)
            sorted.push(currentMin)
       }
    }
    return sorted.concat(firstArray).concat(secondArray)
}

const mergeSort = (array) =>{
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    
    if(array.length < 2){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
