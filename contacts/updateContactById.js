const listContacts = require("./listContacts");
const updateСontacts = require("./updateСontacts");

const updateContactById = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = data;
  await updateСontacts(contacts);
  return contacts[idx];
  // return contacts[id];
};

module.exports = updateContactById;
