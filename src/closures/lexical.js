const builtCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
}

const myCount = builtCount(1);

myCount();
myCount();
myCount();

const myOrderCount = builtCount(10)
myOrderCount();
myOrderCount();
myCount();