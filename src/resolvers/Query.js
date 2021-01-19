const info = () => 'GraphQL API proof of concept';
const clients = async (root, args, context) => context.prisma.client.findMany();

module.exports = {
  info,
  clients,
};
