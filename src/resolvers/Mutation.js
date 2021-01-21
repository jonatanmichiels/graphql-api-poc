const createClient = async (root, args, context) =>
  context.prisma.client.create({
    data: {
      ...args.client,
      ...(args.addresses
        ? {
            addresses: {
              create: args.addresses,
            },
          }
        : {}),
    },
  });

const updateClient = async (root, args, context) =>
  context.prisma.client.update({
    where: { id: args.id },
    data: {
      ...args.client,
    },
  });

const deleteClient = async (root, args, context) => {
  const deletedAt = new Date().toISOString();

  const client = await context.prisma.client.update({
    where: { id: args.id },
    data: {
      deletedAt,
    },
  });

  await context.prisma.address.updateMany({
    where: { clientId: args.id },
    data: {
      deletedAt,
    },
  });

  return client;
};

const createProduct = async (root, args, context) =>
  context.prisma.product.create({
    data: args.product,
  });

const updateProduct = async (root, args, context) =>
  context.prisma.product.update({
    where: { id: args.id },
    data: args.product,
  });

const deleteProduct = async (root, args, context) =>
  context.prisma.product.update({
    where: { id: args.id },
    data: {
      deletedAt: new Date().toISOString(),
    },
  });

module.exports = {
  createClient,
  updateClient,
  deleteClient,
  createProduct,
  updateProduct,
  deleteProduct,
};
