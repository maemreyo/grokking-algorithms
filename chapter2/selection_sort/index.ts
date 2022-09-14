const findSmallest = (list: number[]): number => {
    let smallest = list[0];
    let smallestIndex = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] < smallest) {
            smallest = list[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const selectionSort = (list: number[]): number[] => {
    let newList: number[] = [];
    let length = list.length;
    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallest(list);
        let smallest = list.splice(smallestIndex, 1)[0];
        newList.push(smallest);
    }

    return newList;
}

console.log("selection sort", selectionSort([5, 3, 6, 9, 15, 100, 53, 3, 2]));