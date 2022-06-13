var a = 'Hello'
function hello() {
  let b = 'hello world';
  const c = 'Hello World!!';
  if (true) {
    let d = 'ya no mas'
    debugger
  };

};


hello();

const moneyBox2 = () => {
  debugger
  var saveCoins = 0;
  const conutCoins = (coins) => {
    debugger
    saveCoins += coins;
    console.log(`Money : $${saveCoins}`)
  }
  return conutCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(5);
myMoneyBox(20);
myMoneyBox(2);