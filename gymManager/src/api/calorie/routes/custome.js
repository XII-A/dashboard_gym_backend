module.exports = {
  routes: [
    {
      method: "GET",
      path: "/calorie/weekly",
      handler: "calorie.findWeeklyCalories",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/calorie/weekly/burned",
      handler: "calorie.findWeeklyBurnedCalories",
      config: {
        policies: [],
      },
    },
  ],
};
