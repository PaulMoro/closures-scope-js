const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`moneyBox: $${saveCoins}`)
}

moneyBox(5);
moneyBox(10);

const moneyBox2 = () => {
  var saveCoins = 0;
  const conutCoins = (coins) => {
    saveCoins += coins;
    console.log(`Money : $${saveCoins}`)
  }
  return conutCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(5);
myMoneyBox(20);