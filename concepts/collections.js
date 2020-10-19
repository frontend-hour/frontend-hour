// 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄
// Set, Map, WeakSet, WeakMap

let obj = {
    name: 'myname'
}

console.log(Object.keys(obj));

let obj2 = Object.create(null);

obj2.name= 'somename';
console.log(obj2);

// Set collections of values
// Set collections key value pairs

let newSet = new Set([1,2,3,4,5]);
console.log(newSet);
newSet.add(2);
console.log(newSet);
newSet.add(6);
console.log(newSet);

console.log(newSet.has(4)); // Fast
[1,2,3,4,5].indexOf(4) !== -1 //slow

console.log(newSet[3]);

let newMap = new Map();
newMap.set('key1', 'value1');
console.log(newMap);
newMap.set({ name: 'myname' }, 'object-key');
console.log(newMap);

//WeakSet

// few built in methods

let newWeakSet = new WeakSet();
console.log(newWeakSet);

let newWeakMap = new WeakMap();
console.log(newWeakMap);

// Weakset value and Weakmap key objects

