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
    ]
}