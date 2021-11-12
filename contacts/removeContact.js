const listContacts = require("./listContacts");
const updateСontacts = require("./updateСontacts");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === Number(id));
  if (idx === -1) {
    return null;
  }
  const removeСontact = contacts.splice(idx, 1);
  await updateСontacts(contacts);
  return removeСontact;
};

module.exports = removeContact;
