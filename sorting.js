const {LinkedList, middleOfList, findLast} = require ('./linkedList')


// 3. Implementing quicksort

let dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

function qSort(arr, start = 0, end = arr.length){
    if ( start >= end) {
        return arr
    }
    const middle = partition(arr, start, end);
    arr = qSort(arr, start, middle);
    arr = qSort(arr, middle + 1, end);
    return arr;
};

function partition(arr, start, end){
    const pivot = arr[end -1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, j);
            j++
        }
    }
    swap(arr, end-1, j);
        return j
};

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j]
    arr[j] = tmp;
};



// 4. Implementing merge sort

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }
    
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};   

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i]
    }
    return array;
}



// 5. Sorting a linked list using merge sort

function linkSort(list) {
    while(list.next === null) {
        //console.log(`While ${list}`)
        return list;
    }
    console.log(list)
    const middle = middleOfList(list);
    let left = list.head;
    let right = middle.next;
    middle.next = null;
    
    


    left = linkSort(left);
    right = linkSort(right);
    return linkMerge(left, right, list);
};   

function linkMerge(left, right, list) {
    console.log(left);
    console.log(right);
    let leftFirst = left.head;
    let rightFirst = right.head;
    let outputFirst = list.head;
    while (left.next !== null && right.next !== null) {
        if (leftFirst < rightFirst) {
            outputFirst.next = leftFirst.next;
        }
        else {
            outputFirst.next =  right.next;
        }
    }
    for (let i = leftFirst; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i]
    }
    console.log(list)
    return list;
}

let LL = new LinkedList;
function createList(list){
    LL.insertFirst(3);
    LL.insertFirst(1);
    LL.insertFirst(2);
    LL.insertFirst(6);
    LL.insertFirst(4);
    LL.insertFirst(5);
    return LL;
}
createList(LL);
//console.log(LL);
linkSort(LL);