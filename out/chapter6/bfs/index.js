var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new Array(0);
    }
    Queue.prototype.enqueue = function (value) {
        this.queue.push(value);
        return this.queue;
    };
    Queue.prototype.dequeue = function () {
        if (this.queue.length) {
            return this.queue.shift();
        }
        else {
            return "Nothing to dequeue!";
        }
    };
    return Queue;
}());
var sampleQueue = new Queue();
sampleQueue.enqueue(1);
// sampleQueue.enqueue(9);
// sampleQueue.enqueue(2);
// sampleQueue.enqueue(8);
// sampleQueue.enqueue(3);
// sampleQueue.enqueue(7);
console.log(sampleQueue);
sampleQueue.dequeue();
sampleQueue.dequeue();
console.log(sampleQueue);
//# sourceMappingURL=index.js.map