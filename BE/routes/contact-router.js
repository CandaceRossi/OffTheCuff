const router = require("express").Router();
const Contact = require("../models/contact-model");
// const restricted = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  Contact.getAllContact()
    .then(allContact => {
      res.status(200).json(allContact);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong with your request. " });
    });
});

router.get("/:id", (req, res) => {
  const contact_id = req.params.id;
  Contact.findContactById(contact_id)
    .then(contact => {
      if (contact) {
        res.status(200).json({ contact });
      } else {
        res.status(404).json({ message: "We don't have a contact by that id" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Somthing went wrong with your request" });
    });
});

router.post("/", (req, res) => {
  const contactInfo = req.body;
    Contact.addContact(contactInfo)
      .then(newContact => {
        res.status(201).json(newContact);
      })
      .catch(err => {
        res.status(500).json({
          errorMessage:
            "There was a problem adding the new contact. Make sure all required fields are filled in."
        });
      });
  
});

router.delete("/:id", (req, res) => {
    Contact.removeContact(req.params.id)
      .then(info => res.sendStatus(204))
      .catch(err => res.sendStatus(500));
});


module.exports = router;