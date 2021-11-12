const { v4 } = require("uuid");

const updateСontacts = require("./updateСontacts");
const listContacts = require("./listContacts");

const addContact = async (data) => {
  const newСontact = { ...data, id: v4() };
  const contacts = await listContacts();
  contacts.push(newСontact);
  await updateСontacts(contacts);
  return newСontact;
};

module.exports = addContact;
