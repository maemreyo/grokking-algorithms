const binarySearch = (sortedArray: number[], searchItem: number): number => {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = sortedArray[mid];

        if (guess === searchItem) return mid;
        if (guess < searchItem) low = mid + 1;
        if (guess > searchItem) high = mid - 1;
    }

    return -1;
}

const demoList = [1, 2, 3, 4, 5, 6, 7, 8, 12, 15, 19, 55, 88, 99, 99, 99, 99, 99, 99, 99, 99];

console.log(binarySearch(demoList, 99));
console.log(binarySearch(demoList, 0));