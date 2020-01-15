'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  snipcartParser: async (ctx) => {
    let products = await strapi.services.product.fetchAll(ctx.query);
    return products.map(product => {
      return {
        id: products._id,
        price: products.price,
        name: products.name,
        url: 'localhost:3000/snipcartParser'
      };
    });
  }
};
