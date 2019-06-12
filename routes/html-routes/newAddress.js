var db = require("../../models");

module.exports = app => {
  //get all addresss including any posts
  app.get("/addressbook", (req, res) => {
    db.AddressBook.findAll({}).then(dbAddressBook => {
      console.log(dbAddressBook);
      res.json(dbAddressBook);
    });
  });
};
