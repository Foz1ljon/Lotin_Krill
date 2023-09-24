const Users = require("../models/user.model");

const isAuth = async (ctx, next) => {
  const tgID = ctx.from.id;
  const findUser = await Users.findOne({ tgID });
  if (!findUser) return await Users.create({ tgID, name: ctx.from.first_name });
  else return next();
};

module.exports = isAuth;
