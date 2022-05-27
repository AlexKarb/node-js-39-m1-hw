const listContacts = require('./listContact');
const fileOperation = require('../fileOperation');
const contactsPath = require('../contactPath');

async function removeContact(contactId) {
  const allList = await listContacts();
  const listWithoutContact = await allList?.filter(
    ({ id }) => id !== contactId,
  );
  await fileOperation.writeInFile(contactsPath, listWithoutContact);
  return listWithoutContact;
}

module.exports = removeContact;
