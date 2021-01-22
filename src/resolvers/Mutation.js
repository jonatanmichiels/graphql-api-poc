const createClient = async (root, args, context) => {
  const client = await context.prisma.client.create({
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

  context.pubsub.publish('CLIENT_CHANGED', client);

  return client;
};

const updateClient = async (root, args, context) => {
  const client = await context.prisma.client.update({
    where: { id: args.id },
    data: {
      ...args.client,
    },
  });

  context.pubsub.publish('CLIENT_CHANGED', client);

  return client;
};
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

  context.pubsub.publish('CLIENT_CHANGED', client);

  return client;
};

const createProduct = async (root, args, context) => {
  const product = await context.prisma.product.create({
    data: args.product,
  });

  context.pubsub.publish('PRODUCT_CHANGED', product);

  return product;
};

const updateProduct = async (root, args, context) => {
  const product = await context.prisma.product.update({
    where: { id: args.id },
    data: args.product,
  });

  context.pubsub.publish('PRODUCT_CHANGED', product);

  return product;
};

const deleteProduct = async (root, args, context) => {
  const product = await context.prisma.product.update({
    where: { id: args.id },
    data: {
      deletedAt: new Date().toISOString(),
    },
  });

  context.pubsub.publish('PRODUCT_CHANGED', product);

  return product;
};

module.exports = {
  createClient,
  updateClient,
  deleteClient,
  createProduct,
  updateProduct,
  deleteProduct,
};
