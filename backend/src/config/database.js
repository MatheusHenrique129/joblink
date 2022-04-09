require("dotenv").config();

module.exports = {
    url: process.env.NODE_ENV === "test" ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
    config: {
        define: {
            dialect: "mysql",
            timezone: "-2:00",
            timestamp: true,
            underscored: true
        }
    },
}