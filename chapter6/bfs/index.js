"use strict";
exports.__esModule = true;
var dummy_data_1 = require("./dummy.data");
var queue_1 = require("./queue");
// For each guest, push him to the queue
// Check in the queue, if we have a seller with the above function `isSeller`
var BFS = function (graph, from, to) {
    var queue = new queue_1.Queue();
    var checkedGuests = new Array();
    // Enqueue the "you"'s guests
    enqueueItems(queue, graph[from]);
    while (queue.len()) {
        var guest = queue.dequeue();
        if (checkedGuests.indexOf(guest) === -1) {
            if (isSeller(guest, to)) {
                console.log("Found a seller!");
                return guest;
            }
            else {
                checkedGuests.push(guest);
                enqueueItems(queue, graph[guest]);
            }
        }
    }
    return "Have no seller here!";
};
var isSeller = function (name, seller) { return name === seller; };
var enqueueItems = function (queue, items) {
    for (var i = 0; i < items.length; i++) {
        var guest = items[i];
        queue.enqueue(guest);
    }
};
console.log(BFS(dummy_data_1["default"], "you", "Jo31"));
