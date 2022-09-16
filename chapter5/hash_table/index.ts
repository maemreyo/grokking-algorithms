class HashTable {
	public table: any;
	public size: any;

  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key: string, value: string | number | boolean | Array<any> | Object) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key: string) {
    const target = this._hash(key);
    return this.table[target];
  }

  remove(key: string) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = [];
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

const hashTable = new HashTable();

hashTable.set("William", 24);
hashTable.set("Ruth", 21);

hashTable.get("William");
hashTable.get("Ruth");