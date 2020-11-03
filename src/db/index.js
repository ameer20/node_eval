const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "password",
  database: "DataBase",
  sync: true,
});

const blogs = require("./models/blog")(sequelize);
const users = require("./models/users")(sequelize);

const init = async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log("db > init > ", error);
  }
};

module.exports = {
  init,
  users,
  blogs,
  sequelize,
};