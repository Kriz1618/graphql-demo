const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_URL = 'mongodb://localhost:27017/test'

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(DB_URL, { useNewUrlPArser: true })
  .then(() => console.log('Connected to Mongo'))
  .catch((error) => console.log('Error connecting to MongoDB', error.message));

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})