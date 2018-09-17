'use strict';

var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var data = Immutable.fromJS({ a: { b: { c: 1 } } });
// 让 cursor 指向 { c: 1 }
var cursor = Cursor.from(data, ['a', 'b'], function (newData) {
  // 当 cursor 或其子 cursor 执行 update 时调用
  console.log(newData);
});

console.log(cursor.get('c')); // 1
cursor = cursor.update('c', function (x) {
  return x + 1;
});
console.log(cursor.get('c')); // 2
console.log(data); // 2

var Map = Immutable.Map;
var map1 = Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('a', 2);
console.log(map1.get('a'));
console.log(map2.get('a'));

assert.equal(map1, map2); // uses map1.equals
assert.strictEqual(map1, map2); // uses ===
var map3 = map1.set('b', 50);
assert.notEqual(map1, map3); // uses map1.equals