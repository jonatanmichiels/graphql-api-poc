import { Context } from '../types';

const info = () => 'GraphQL API proof of concept';
const clients = async (root, args, context: Context) =>
  context.prisma.client.findMany();

export default { info, clients };
