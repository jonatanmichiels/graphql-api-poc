const client = async (order, args, context) =>
  context.prisma.order.findUnique({ where: { id: order.id } }).client();

const products = async (order, args, context) =>
  context.prisma.order.findUnique({ where: { id: order.id } }).products();

module.exports = {
  products,
  client,
};
