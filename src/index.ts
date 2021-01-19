import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { Query } from './resolvers';

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf-8'
);

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
