var db = require("../../models");

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
    db.AddressBook.create({
      customerID: req.params.customerID,
      country: req.params.country,
      address1: req.params.address1,
      address2: req.params.address2,
      city: req.params.city,
      zipcode: req.params.zipcode
    }).then(dbAddressBook => {
      console.log(dbAddressBook);
      res.json(dbAddressBook);
    });
  });
};
