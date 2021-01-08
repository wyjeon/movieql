const jeon = {
  name: "jeon",
  age: 40,
  gender: "femail"
}

const resolvers = {
  Query: {
    person: () => jeon
  }
}

export default resolvers;