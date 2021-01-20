const orders = async (product, args, context) =>
  context.prisma.product.findUnique({ where: { id: product.id } }).orders();

module.exports = {
  orders,
};
