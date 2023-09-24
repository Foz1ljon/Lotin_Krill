const { token } = require("../config");
const isAuth = require("./middlewares/isAuth");
const home = require("./routes/command.route");
const { Bot } = require("grammy");
require("./utils/connect")();
const bot = new Bot(token);

bot.use(isAuth);
bot.use(home);

bot.start();

bot.catch((err) => {
  console.log(err);
});
