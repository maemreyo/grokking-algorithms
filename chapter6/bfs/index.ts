class Queue {
    queue: any[];

    constructor() {
        this.queue = new Array(0);
    }

    enqueue(value: string | number) {
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
}

const sampleQueue = new Queue();

sampleQueue.enqueue(1);
sampleQueue.enqueue(9);
sampleQueue.enqueue(2);
sampleQueue.enqueue(8);
sampleQueue.enqueue(3);
sampleQueue.enqueue(7);

console.log(sampleQueue);

sampleQueue.dequeue();
sampleQueue.dequeue();
console.log(sampleQueue);