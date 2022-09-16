import guestList from "./dummy.data";
import { Queue } from "./queue";

// For each guest, push him to the queue
// Check in the queue, if we have a seller with the above function `isSeller`
const BFS = (graph: string[], from: string, to: string) => {
    const queue = new Queue();
    const checkedGuests = new Array<string>();
    
    // Enqueue the "you"'s guests
    enqueueItems(queue, graph[from]);
    
    while (queue.len()) {
        let guest = queue.dequeue();
        
        if (checkedGuests.indexOf(guest) === -1) {
            if (isSeller(guest, to)) {
                console.log("Found a seller!");
                return guest
            } else {
                checkedGuests.push(guest);
                enqueueItems(queue, graph[guest])
            }
        }
    }
    return "Have no seller here!"
}

const isSeller = (name: string, seller: string): boolean => name === seller;

const enqueueItems = (queue: Queue, items: string[]) => {
    for (let i = 0; i < items.length; i++) {
        const guest = items[i];
        queue.enqueue(guest);
    }
}
console.log(BFS(guestList, "you", "Jo31"));