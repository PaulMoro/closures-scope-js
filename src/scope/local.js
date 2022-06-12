const helloWorld = () => {
  const hello = 'hello world';
  console.log(hello);
};

helloWorld()
console.log(hello);


var scope = 'Im global';

const functionScope = () => {
  var scope = 'I am variable local'
  const func = () => {
    return scope
  }
  console.log(func())
}

functionScope()