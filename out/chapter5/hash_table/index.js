var HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = new Array(127);
        this.size = 0;
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    };
    HashTable.prototype.set = function (key, value) {
        var index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    };
    HashTable.prototype.get = function (key) {
        var target = this._hash(key);
        return this.table[target];
    };
    HashTable.prototype.remove = function (key) {
        var index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            this.table[index] = [];
            this.size--;
            return true;
        }
        else {
            return false;
        }
    };
    return HashTable;
}());
var hashTable = new HashTable();
hashTable.set("William", 24);
hashTable.set("Ruth", 21);
hashTable.get("William");
hashTable.get("Ruth");
//# sourceMappingURL=index.js.map