const client = async (order, args, context) =>
  context.prisma.order
    .findFirst({ where: { id: order.id, deletedAt: null } })
    .client();

const products = async (order, args, context) =>
  context.prisma.order
    .findFirst({ where: { id: order.id, deletedAt: null } })
    .products();

module.exports = {
  products,
  client,
};
