import { Context } from '../types';

const addresses = async (client, args, context: Context) =>
  context.prisma.client.findUnique({ where: { id: client.id } }).addresses();

const orders = async (client, args, context: Context) =>
  context.prisma.client.findUnique({ where: { id: client.id } }).orders();

export default {
  addresses,
  orders,
};
