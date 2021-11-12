const contactsOperations = require("./contacts");

const contactsAction = async ({ action = "list", id, ...data }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      // console.log("All found contacts:\n", contacts);
      return contacts;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Not found contact with id=${id}`);
      }
      // console.log("Contact was found:\n", contact);
      return contact;
    case "add":
      const newContact = await contactsOperations.addContact(data);
      // console.log("Contact was added:\n", newContact);
      return newContact;
    case "update":
      const updateContact = await contactsOperations.updateContactById(
        Number(id),
        data
      );
      if (!updateContact) {
        throw new Error(`Not found contact with id=${id}`);
      }
      // console.log("Contact was updated:\n", updateContact);
      return updateContact;
    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      if (!removeContact) {
        throw new Error(`Not found contact with id=${id}`);
      }
      // console.log("Contact was removed:\n", removeContact);
      return removeContact;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

module.exports = contactsAction;
