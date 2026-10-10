const cron = require("node-cron");
const { syncDB } = require("../task/sync-db");

console.log("Inicio del cron-ticker");
cron.schedule("1-59/5 * * * * *", syncDB);

