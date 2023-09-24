const {
  StartCommand,
  translater,
} = require("../controllers/command.controller");
const { Composer } = require("grammy");

const bot = new Composer();

bot.command("start", StartCommand);

bot.on(":text", translater);

module.exports = bot;
