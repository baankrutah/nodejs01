function SomeClass(foo) {
  this.first = foo;
}

SomeClass.prototype.someProperty = 'this is property';
SomeClass.prototype.printFirst = function () {
  console.log('first:',this.first);
};
module.exports = SomeClass;
