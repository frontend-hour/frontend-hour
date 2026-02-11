function createIterator(array) {
  let count = 0;
  return function next() {
    let item = array[count];
    count += 1;
    return item;
  };
}

const names = ['a', 'b', 'c'];
const namesIterator = createIterator(names);

console.log(namesIterator);
console.log(namesIterator());
console.log(namesIterator());
console.log(namesIterator());

function* createFlow() {
  let x = 0;
  let y = 90;
  let result = x + y;
  yield `Frontend Hour ${result}`;

  const newNum = yield 'returnVal';

  const num = 10 + newNum;
  yield num;
}

const generatorFlow = createFlow();

console.log(generatorFlow.next());
console.log(generatorFlow.next());
console.log(generatorFlow.next(10));
console.log(generatorFlow.next());
