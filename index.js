var passes = 0;
var fails = 0;
var testTotal = 0;

const describe = function(desc, func) {
  console.log(desc)
  try {
    func();
  } catch(e) {
    fails += 1;
    console.log("    fail:");
    console.log(e);
  }
}

const it = function(msg, fn) {
  describe('  ' + msg, fn)
}

const matchers = function(exp) {
    var matcherObj = {
             toBe: function(assertion) {
                    if (exp === assertion) {
                       console.log('    pass')
                       passes += 1;
                       return true
                    } else {
                       console.log('    fail')
                       fails += 1;
                       return false
                   }
              },
              toNotBe: function(assertion) {
                    if (exp !== assertion) {
                       console.log('    pass')
                       passes += 1;
                       return true
                    } else {
                       console.log('    fail')
                       fails += 1;
                       return false
                   }
              }
         }

     return matcherObj;
}

const expect = function(exp) { return matchers(exp) }

const createDouble = function(methodNameArray, returnVal) {
  if (methodNameArray.length !== returnVal.length) {
     throw "ERROR: Arrays need to be of equal length";
  }
  var obj = {};
  methodNameArray.forEach((methodName, index)=> {
      obj[methodName] = () => { return returnVal[index]};
  });
  return obj;
}

function Dog() {

}

Dog.prototype.bark = function() {
   return "woof";
}

var cat = createDouble(['meow'], ['meow!']);

describe('dog', function(){
  it('can bark', function(){
     var dog = new Dog();
     expect(dog.bark()).toNotBe('woof!');
  });

  it('can bark again', function(){
     var dog = new Dog();
     expect(dog.bark()).toBe('woof');
  });

  it('can meow', function(){
     var dog = new Dog();
     expect(dog.meow()).toBe('meow');
  });
});

describe('cat', function() {
  it('can meow', function() {
      expect(cat.meow()).toBe('meow!');
  });
});

console.log("Total tests: " + (passes + fails));
console.log("Passes: " + (passes));
console.log("Fails: " + (fails));


