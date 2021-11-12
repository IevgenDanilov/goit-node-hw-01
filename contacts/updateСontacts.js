const fs = require("fs/promises");

const filePath = require("./contactsPath");

const updateСontacts = async (contacts) => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
};

module.exports = updateСontacts;
