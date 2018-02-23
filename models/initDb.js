const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/testdb');
const {Restaurant, Hotel, Attraction} = require('./models.js');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .then(() => {
    Restaurant.sync();
  })
  .then(() => {
    Hotel.sync();
  })
  .then(() => {
    Attraction.sync();
  })
  .then(() => 
    sequelize.close()
  )
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });