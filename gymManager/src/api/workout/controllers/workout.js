'use strict';

/**
 * workout controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::workout.workout', ({ strapi }) => ({
  async findWeeklyWorkouts(ctx) {
    let { id } = ctx.state.user;

    console.log(ctx.query);
    //@ts-ignore
    let { startDate, endDate } = ctx.query;
    console.log(startDate);
    console.log(endDate);

    let query = `SELECT w.date , SUM(w.duration) AS total_duration FROM workouts AS w JOIN workouts_member_links AS d ON w.id = d.workout_id JOIN up_users AS u ON u.id = d.user_id WHERE u.id = ${id} AND w.date BETWEEN '${startDate}' AND '${endDate}' GROUP BY w.date`;
    let rows = await strapi.db.connection.raw(query);

    console.log(rows);
    return rows;
  },
}));
