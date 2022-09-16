var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var quicksort = function (list) {
    if (list.length < 2) {
        return list;
    }
    else {
        var pivot_1 = list.shift();
        var less = list.filter(function (x) { return x <= pivot_1; });
        var greater = list.filter(function (x) { return x > pivot_1; });
        return __spreadArray(__spreadArray(__spreadArray([], quicksort(less), true), [pivot_1], false), quicksort(greater), true);
    }
};
console.log("Quicksort:", quicksort([4, 10, 5, 2, 3, 2, 1, 3, 1, 9, 6]));
//# sourceMappingURL=index.js.map