const person = {
  name: 'daniel',
  weight: 84.5,
  fatten(gainedWeight = 0) {
    console.log(`gained ${gainedWeight}Kg`);

    this.weight += gainedWeight;
  },
};

const { name, weight } = person;

person.fatten(3);
console.log(`${name} weighs ${weight}Kg`);
person.fatten(3);
console.log(`${name} weighs ${weight}Kg`);
