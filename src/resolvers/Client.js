const addresses = async (client, args, context) =>
  context.prisma.client.findUnique({ where: { id: client.id } }).addresses();

const orders = async (client, args, context) =>
  context.prisma.client.findUnique({ where: { id: client.id } }).orders();

module.exports = {
  addresses,
  orders,
};
