const contactsOperations = require("./contacts");

const contactsAction = async ({ action = "list", id, ...data }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      // console.log(contacts);
      return contacts;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Not found contact with id=${id}`);
      }
      console.log(contact);
      return contact;
    case "add":
      const newContact = await contactsOperations.addContact(data);
      console.log(newContact);
      return newContact;
    case "update":
      const updateContact = await contactsOperations.updateContactById(
        id,
        ...data
      );
      if (!updateContact) {
        throw new Error(`Not found contact with id=${id}`);
      }
      // console.log(updateContact);
      return updateContact;
    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      if (!removeContact) {
        throw new Error(`Not found contact with id=${id}`);
      }
      console.log(removeContact);
      return removeContact;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

module.exports = contactsAction;
