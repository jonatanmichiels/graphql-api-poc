const fs = require('fs');
const path = require('path');
const { ApolloServer, PubSub } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const {
  Query,
  Mutation,
  Client,
  Order,
  Product,
  Subscription,
} = require('./resolvers');

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf-8'
);

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Client,
  Order,
  Product,
};

const prisma = new PrismaClient();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
    pubsub,
  },
});

// eslint-disable-next-line no-console
server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
