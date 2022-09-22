var findSmallest = function (list) {
    var smallest = list[0];
    var smallestIndex = 0;
    for (var i = 1; i < list.length; i++) {
        if (list[i] < smallest) {
            smallest = list[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};
var selectionSort = function (list) {
    var newList = [];
    var length = list.length;
    for (var i = 0; i < length; i++) {
        var smallestIndex = findSmallest(list);
        var smallest = list.splice(smallestIndex, 1)[0];
        newList.push(smallest);
    }
    return newList;
};
console.log("selection sort", selectionSort([5, 3, 6, 9, 15, 100, 53, 3, 2]));
