const quicksort = (list) => {
    if (list.length < 2) {
        return list;
    }
    else {
        let pivot = list[0];
        let less = [];
        let greater = [];
        for (let index = 1; index < list.length; index++) {
            const item = list[index];
            if (item >= pivot) {
                greater.push(item);
            }
            else {
                less.push(item);
            }
        }
        return [...quicksort(less), pivot, ...quicksort(greater)];
    }
};
console.log("Quicksort:", quicksort([4, 10, 5, 2, 3, 2, 1, 3, 4, 1, 9, 6]));
//# sourceMappingURL=index.js.map