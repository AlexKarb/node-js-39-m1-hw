const fileOperation = require('../fileOperation');
const contactsPath = require('../contactPath');

async function listContacts() {
  return await fileOperation.readFile(contactsPath);
}

module.exports = listContacts;
