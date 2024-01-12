module.exports = {
  routes: [
    {
      method: "GET",
      path: "/workout/weekly",
      handler: "workout.findWeeklyWorkouts",
      config: {
        policies: [],
      },
    },
  ],
};
