// key value pairs
// Hash table has defined size
// Hashing function - Modulus
// Inserting data

// hash function this will take the key and generate hashcode

function generateHashCode(key, size) {
    return key.length % size;
}

class HashTable {
    constructor(size) {
        this._hashtable = {};
        this._size = size;
    }

    addMap(key, value) {
        const hashcode = generateHashCode(key, this._size);
        if(!this._hashtable.hasOwnProperty(hashcode)) {
            this._hashtable[hashcode] = {};
        }
        if(!this._hashtable[hashcode].hasOwnProperty(key)) {
            this._hashtable[hashcode][key] = value;
        }
        this._hashtable[hashcode][key] = value;
    }

    search(key) {
        const hashcode = this.generateHashCode(key);
        if (this._hashtable.hasOwnProperty(hashcode) && this._hashtable[hash].hasOwnProperty(key)) {
          return this._hashtable[hashcode][key];
        } else {
          return null;
        }
     }
}

let hashMap = new HashTable(20);
hashMap.addMap('one', 1);
hashMap.addMap('two', 2);
hashMap.addMap('three', 2);
console.log(hashMap);

// https://www.educative.io/blog/data-strucutres-hash-table-javascript#what-is



