const fileOperation = require('../fileOperation');
const contactsPath = require('../getContactsPath');

async function listContacts() {
  return await fileOperation.readFile(contactsPath);
}

module.exports = listContacts;
