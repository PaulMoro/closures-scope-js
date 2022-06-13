const person = () =>{
  let saveName = 'name';
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person()
console.log(newPerson.getName());
newPerson.setName('Paul');
console.log(newPerson.getName());