"use strict";

module.exports = {
  populate: async (ctx) => {
    console.log("Initializing");

    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };

    await strapi.services.game.populate(options);

    ctx.send("Finish populate");
  },
};
