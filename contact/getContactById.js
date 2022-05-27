const listContacts = require('./listContact');

async function getContactById(contactId) {
  const allList = await listContacts();
  const contactById = await allList?.find(({ id }) => id === contactId);

  return contactById ? contactById : null;
}

module.exports = getContactById;
