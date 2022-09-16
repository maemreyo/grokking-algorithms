"use strict";
exports.__esModule = true;
exports.Queue = void 0;
// Implement a Queue
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
    Queue.prototype.len = function () {
        return this.queue.length;
    };
    return Queue;
}());
exports.Queue = Queue;
