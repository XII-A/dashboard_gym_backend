module.exports = {
  routes: [
    {
      method: "GET",
      path: "/step/weekly",
      handler: "step.findWeeklySteps",
      config: {
        policies: [],
      },
    },
  ],
};
