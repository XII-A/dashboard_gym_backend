"use strict";

/**
 * step controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::step.step", ({ strapi }) => ({
  async findWeeklySteps(ctx) {
    let { id } = ctx.state.user;

    console.log(ctx.query);
    //@ts-ignore
    let { startDate, endDate } = ctx.query;
    console.log(startDate);
    console.log(endDate);

    let query = `SELECT s.date , SUM(s.count) AS total_steps FROM steps AS s JOIN steps_member_links AS d ON s.id = d.step_id JOIN up_users AS u ON u.id = d.user_id WHERE u.id = ${id} AND s.date BETWEEN '${startDate}' AND '${endDate}' GROUP BY s.date`;
    let rows = await strapi.db.connection.raw(query);

    console.log(rows);
    return rows;
  },
}));
