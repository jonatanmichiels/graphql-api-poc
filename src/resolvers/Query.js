const info = () => 'GraphQL API proof of concept';

const getClient = async (root, args, context) =>
  context.prisma.client.findFirst({ where: { id: args.id } });

const getClients = async (root, args, context) =>
  context.prisma.client.findMany({ where: { deletedAt: null } });

const getProduct = async (root, args, context) =>
  context.prisma.product.findFirst({
    where: { id: args.id, deletedAt: null },
  });

const getProducts = async (root, args, context) =>
  context.prisma.product.findMany({ where: { deletedAt: null } });

const getOrder = async (root, args, context) =>
  context.prisma.order.findFirst({ where: { id: args.id, deletedAt: null } });

const getOrders = async (root, args, context) =>
  context.prisma.order.findMany({ where: { deletedAt: null } });

module.exports = {
  info,
  getClient,
  getClients,
  getProduct,
  getProducts,
  getOrder,
  getOrders,
};
