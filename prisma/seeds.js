/* eslint-disable no-await-in-loop */
const { PrismaClient } = require('@prisma/client');
const { name, internet, address, commerce, random } = require('faker');

const prisma = new PrismaClient();

const PRODUCTS_COUNT = 25;
const CLIENTS_COUNT = 5;
const MAX_ORDER_COUNT = 3;
const MAX_PRODUCTS_FOR_ORDER_COUNT = 12;

async function main() {
  const products = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < PRODUCTS_COUNT; i++) {
    const productName = commerce.productName();
    const productCode = `${productName
      .toLowerCase()
      .split(' ')
      .join('_')}_${i}`;
    const productPrice =
      Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1 * 100);
    const product = await prisma.product.create({
      data: {
        name: productName,
        code: productCode,
        description: commerce.productDescription(),
        price: productPrice,
      },
    });

    products.push(product);
  }

  // eslint-disable-next-line no-plusplus
  for (let f = 0; f < CLIENTS_COUNT; f++) {
    const client = await prisma.client.create({
      data: {
        firstName: name.firstName(),
        lastName: name.lastName(),
        email: internet.email(),
      },
    });

    await prisma.address.create({
      data: {
        client: { connect: { id: client.id } },
        addressLine: address.streetAddress(),
        zip: address.zipCode(),
        city: address.city(),
        isBillingAddress: true,
        isShippingAddress: true,
      },
    });

    for (
      let g = 0;
      g < random.number({ min: 0, max: MAX_ORDER_COUNT });
      // eslint-disable-next-line no-plusplus
      g++
    ) {
      const orderProducts = [];

      for (
        let h = 0;
        h <
        random.number({
          min: 0,
          max: MAX_PRODUCTS_FOR_ORDER_COUNT - 1,
        });
        // eslint-disable-next-line no-plusplus
        h++
      ) {
        orderProducts.push(
          products[
            random.number({
              min: 0,
              max: PRODUCTS_COUNT - 1,
            })
          ]
        );
      }

      const order = await prisma.order.create({
        data: {
          client: { connect: { id: client.id } },
        },
      });

      await prisma.order.update({
        where: { id: order.id },
        data: {
          products: {
            set: orderProducts.map((p) => ({
              id: p.id,
            })),
          },
        },
      });
    }
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
