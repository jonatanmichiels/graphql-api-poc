const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { Query, Client } = require('./resolvers');

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf-8'
);

const resolvers = {
  Query,
  Client,
};

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

// eslint-disable-next-line no-console
server.listen().then(({ url }) => console.log(`Server is running on ${url}`));