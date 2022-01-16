const db = require('../data/dbConfig');


module.exports = {
  getAllContact,
  findContactById,
  addContact,
  removeContact
};


function getAllContact() {
  return db('contact')

}

function findContactById(contact_id) {
  return db("contact")
    .where("contact_id", contact_id)
    .first();
}

function addContact(contactInfo) {
  console.log(contactInfo);
  return db("contact").insert(contactInfo);
}

function removeContact(contact_id) {
  return db("contact")
    .where({ contact_id: contact_id })
    .del();
}
