function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  }
}

let obj = {
  name: 'tzvi',

  func(x) {
    return `${this.name}. ${x}`;
  }
}

let foo = myBind(obj.func, obj)

console.log(foo(10));