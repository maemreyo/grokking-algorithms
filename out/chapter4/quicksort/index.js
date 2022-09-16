const quicksort = (list) => {
    if (list.length < 2) {
        return list;
    }
    else {
        let pivot = list.shift();
        let less = list.filter(x => x <= pivot);
        let greater = list.filter(x => x > pivot);
        return [...quicksort(less), pivot, ...quicksort(greater)];
    }
};
console.log("Quicksort:", quicksort([4, 10, 5, 2, 3, 2, 1, 3, 1, 9, 6]));
//# sourceMappingURL=index.js.map