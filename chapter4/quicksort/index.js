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
        var pivot = list[0];
        var less = [];
        var greater = [];
        for (var index = 1; index < list.length; index++) {
            var item = list[index];
            if (item >= pivot) {
                greater.push(item);
            }
            else {
                less.push(item);
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], quicksort(less), true), [pivot], false), quicksort(greater), true);
    }
};
console.log("Quicksort:", quicksort([4, 10, 5, 2, 3, 2, 1, 3, 4, 1, 9, 6]));
