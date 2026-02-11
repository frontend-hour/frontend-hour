// prototypal inheritance is when an object inherits from another object.

// You can add prototype to native javaScript function as well -
Array.prototype.first = function () { return this[0] };
[1, 2, 3].first(); //Output 1