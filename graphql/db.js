export const people = [
  {
    id: "0",
    name: "jeon",
    age: 40,
    gender: "female"
  },
  {
    id: "1",
    name: "kim",
    age: 30,
    gender: "male"
  },
  {
    id: "2",
    name: "park",
    age: 20,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}