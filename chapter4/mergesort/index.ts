const mergeSort = (list: number[]): number[] => {
    const len = list.length;
    if(len < 2) return list;

    let left: number[] = [];
    let right: number[] = [];
    
    let middle = Math.floor((0 + len) / 2);

    left = list.splice(0, middle);
    right = list;

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
    let sortedItems: number[] = [];

    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedItems.push(left.shift());
        } else {
            sortedItems.push(right.shift());
        }
    }

    return [...sortedItems, ...left, ...right];
} 

console.log(mergeSort([3, 1, 5, 9, 13, 0, 7]));