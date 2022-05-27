const { v4 } = require('uuid');
const listContacts = require('./listContact');
const fileOperation = require('../fileOperation');
const contactsPath = require('../contactPath');

async function addContact(name, email, phone) {
  const allList = await listContacts();
  const haveMatch = await allList?.find(contact => contact.phone === phone);

  if (haveMatch) {
    return null;
  } else {
    const newContact = { name, email, phone, id: v4() };
    await allList.push(newContact);
    await fileOperation.writeInFile(contactsPath, allList);
    return newContact;
  }
}

module.exports = addContact;
