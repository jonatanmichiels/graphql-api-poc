const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { Query, Mutation, Client, Order, Product } = require('./resolvers');

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf-8'
);

const resolvers = {
  Query,
  Mutation,
  Client,
  Order,
  Product,
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
