// Implement a Queue
export class Queue {
    queue: string[];

    constructor() {
        this.queue = new Array(0);
    }

    enqueue(value: string) {
        this.queue.push(value);
        return this.queue;
    }

    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        } else {
            return "Nothing to dequeue!"
        }
    }

    len() {
        return this.queue.length;
    }
}
