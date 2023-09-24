const { connect } = require("mongoose");
const { db_url } = require("../../config");

const Runner = async () => await connect(db_url);

module.exports = Runner;
