var binarySearch = function (sortedArray, searchItem) {
    var low = 0;
    var high = sortedArray.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var guess = sortedArray[mid];
        if (guess === searchItem)
            return mid;
        if (guess < searchItem)
            low = mid + 1;
        if (guess > searchItem)
            high = mid - 1;
    }
    return -1;
};
var sampleList = [1, 2, 3, 4, 5, 6, 7, 8, 12, 15, 19, 55, 88, 99, 99, 99, 99, 99, 99, 99, 99];
console.log(binarySearch(sampleList, 99));
console.log(binarySearch(sampleList, 0));
//# sourceMappingURL=index.js.map