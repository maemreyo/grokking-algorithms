"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dummy_data_1 = require("./dummy.data");
const queue_1 = require("./queue");
// For each guest, push him to the queue
// Check in the queue, if we have a seller with the above function `isSeller`
const BFS = (graph, from, to) => {
    const queue = new queue_1.Queue();
    const checkedGuests = new Array();
    // Enqueue the "you"'s guests
    enqueueItems(queue, graph[from]);
    while (queue.len()) {
        let guest = queue.dequeue();
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
const isSeller = (name, seller) => name === seller;
const enqueueItems = (queue, items) => {
    for (let i = 0; i < items.length; i++) {
        const guest = items[i];
        queue.enqueue(guest);
    }
};
console.log(BFS(dummy_data_1.default, "you", "Jo31"));
//# sourceMappingURL=index.js.map