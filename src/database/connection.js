const {Sequelize} = require("sequelize");

const DB_NAME = "mydb"; 
const DB_USER = "root"; //usuario(root)
const DB_PASS = "123456"; //senha 
const DB_CONFIG = {
    host: "localhost", //localhost
    dialect: "mysql" , //mysql
    port: 3306,  //porta do banco
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
    console.log("Database connected!");
} catch (error) {
    console.log("Failure when try to connect to DB");
};

async function hasConnection(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};

Object.assign(db, {
    hasConnection,
});

module.exports = db;