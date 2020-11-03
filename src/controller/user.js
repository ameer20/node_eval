const { sequelize } = require("../db/index");
const md5 = require("md5");

function Init(app) {
    app.get("/", (request) => {
        response.status(200).send(`Hi Welcome to the Login and Signup API`);
    });

    app.post("/auth/signup", async (request) => {
        var newUser = new Users({
            name: request.name,
            password: request.password
        });
        
        await newUser
            .save()
            .then(() => {
                response.status(200).send(newUser);
            })
            .catch(error => {
                console.log("Error is ", error.message);
            });
    });

}

module.exports = {
    Init,
};