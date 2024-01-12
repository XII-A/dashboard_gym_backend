"use strict";

/**
 * calorie controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::calorie.calorie", ({ strapi }) => ({
  async findWeeklyCalories(ctx) {
    let { id } = ctx.state.user;

    console.log(ctx.query);
    //@ts-ignore
    let { startDate, endDate } = ctx.query;
    console.log(startDate);
    console.log(endDate);

    let query = `SELECT c.date , SUM(c.kcl) AS total_calories FROM calories AS c JOIN calories_member_links AS d ON c.id = d.calorie_id JOIN up_users AS u ON u.id = d.user_id WHERE u.id = ${id} AND c.is_burned_calories = false AND c.date BETWEEN '${startDate}' AND '${endDate}' GROUP BY c.date`;
    let rows = await strapi.db.connection.raw(query);

    console.log(rows);
    return rows;
  },
  async findWeeklyBurnedCalories(ctx) {
    let { id } = ctx.state.user;

    console.log(ctx.query);
    //@ts-ignore
    let { startDate, endDate } = ctx.query;
    console.log(startDate);
    console.log(endDate);

    let query = `SELECT c.date , SUM(c.kcl) AS total_calories FROM calories AS c JOIN calories_member_links AS d ON c.id = d.calorie_id JOIN up_users AS u ON u.id = d.user_id WHERE u.id = ${id} AND c.is_burned_calories = true AND c.date BETWEEN '${startDate}' AND '${endDate}' GROUP BY c.date`;
    let rows = await strapi.db.connection.raw(query);

    console.log(rows);
    return rows;
  }
}));
