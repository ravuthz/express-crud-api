const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

(async () => {
  await User.sync();
  const jane = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
})();

module.exports = {
  User,
};
