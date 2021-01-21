const orders = async (product, args, context) =>
  context.prisma.product
    .findFirst({ where: { id: product.id, deletedAt: null } })
    .orders();

module.exports = {
  orders,
};
