const translate = require("../utils/translate");

const StartCommand = async (ctx) => {
  await ctx.reply(`Assalomu alaykum ${ctx.from.first_name}`);
  await ctx.reply("Marhamat textni yuboring...");
};

const translater = async (ctx) => {
  await ctx.reply(translate(ctx.message.text));
};

module.exports = {
  StartCommand,
  translater,
};
