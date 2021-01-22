const clientChanged = {
  subscribe: (parent, args, context) =>
    context.pubsub.asyncIterator('CLIENT_CHANGED'),
  resolve: (payload) => payload,
};

const productChanged = {
  subscribe: (parent, args, context) =>
    context.pubsub.asyncIterator('PRODUCT_CHANGED'),
  resolve: (payload) => payload,
};

module.exports = {
  clientChanged,
  productChanged,
};
