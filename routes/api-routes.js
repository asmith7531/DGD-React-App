var db = require("../models");

module.exports = app => {
  //get all addresss including any posts
  app.get("/api/addressbook", (req, res) => {
    db.AddressBook.findAll({}).then(dbAddressBook => {
      console.log(dbAddressBook);
      res.json(dbAddressBook);
    });
  });

  //save new addresses
  app.post("/newAddress", (req, res, next) => {
    res.locals.connection.query((error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
  });
};
