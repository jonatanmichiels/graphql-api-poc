const addresses = async (client, args, context) =>
  context.prisma.client
    .findFirst({ where: { id: client.id, deletedAt: null } })
    .addresses();

const orders = async (client, args, context) =>
  context.prisma.client
    .findFirst({ where: { id: client.id, deletedAt: null } })
    .orders();

module.exports = {
  addresses,
  orders,
};
