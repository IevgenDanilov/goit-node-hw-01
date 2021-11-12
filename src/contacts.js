// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");
// console.log(contactsPath);

// TODO: задокументировать каждую функцию

//fs и его методы readFile() и writeFile()

const contactsAction = async ({ action = "getAll", id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await contactsOperations.listContacts();
      return contacts;
    case "getById":
      const contact = await contactsOperations.getContactById();
      if (!contact) throw `Not found contact with id=${id}`;
      return contacts;
    case "addContact":
  }
};

const id = "235345-4353454";

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) return error.message;
    const contacts = JSON.parse(data);
    // console.log(contacts);
    return contacts;
  });
}

// listContacts();

function getContactById(contactId) {
  const сontacts = listContacts();
  const idx = сontacts.findIndex((сontact) => сontact.id === contactId);
  if (idx === -1) return `Контакт с id=${id} не найден`;
  return сontacts[idx];
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(id, name, email, phone) {
  const newContact = { id, name, email, phone };
  fs.appendFile(contactsPath, newContact, (error) => {
    if (error) return error.message;
  });
}
// listContacts();
// addContact(99, "Yevhen Dan", "qwe@qwe", "(692) 802-2549");

module.exports = {
  listContacts,
  addContact,
};
