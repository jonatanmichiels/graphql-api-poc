const info = () => 'GraphQL API proof of concept';

const clients = async (root, args, context) => context.prisma.client.findMany();
const orders = async (root, args, context) => context.prisma.order.findMany();
const products = async (root, args, context) =>
  context.prisma.product.findMany();

module.exports = {
  info,
  clients,
  orders,
  products,
};
