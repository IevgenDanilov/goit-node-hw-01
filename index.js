const { program } = require("commander");

const contactsAction = require("./contactsAction");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

contactsAction(argv);

// const options = program.opts();
// contactsAction(options);
