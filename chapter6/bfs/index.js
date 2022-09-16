var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new Array();
    }
    Queue.prototype.enqueue = function (value) {
        this.queue.push(value);
        return this.queue;
    };
    Queue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    return Queue;
}());
var sampleQueue = new Queue;
sampleQueue.enqueue(1);
sampleQueue.enqueue(9);
sampleQueue.enqueue(2);
sampleQueue.enqueue(8);
sampleQueue.enqueue(3);
sampleQueue.enqueue(7);
console.log(sampleQueue);
