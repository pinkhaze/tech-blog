const sequelize = require("../config/connection");
const { User, Post } = require("../models/index");
const postData = require("./postData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });


    process.exit(0);
};

seedDatabase();