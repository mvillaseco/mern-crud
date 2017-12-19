// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB
//'db: process.env.DB'
module.exports = {
  db: 'mongodb://Mauro105:35410479@valeriacl-shard-00-00-wy2hi.mongodb.net:27017,valeriacl-shard-00-01-wy2hi.mongodb.net:27017,valeriacl-shard-00-02-wy2hi.mongodb.net:27017/test?ssl=true&replicaSet=ValeriaCL-shard-0&authSource=admin'
};
