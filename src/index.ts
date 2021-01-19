import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { Query, Client } from './resolvers';

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

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
