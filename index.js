const commander = require('./commander');

const contactOperation = require('./contact');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const list = await contactOperation.listContacts();
      console.log('~ list', list);
      break;

    case 'get':
      const get = await contactOperation.getContactById(id);
      if (!get) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log('~ get', get);
      break;

    case 'add':
      const add = await contactOperation.addContact(name, email, phone);
      if (!add) {
        throw new Error(`Contact with phone=${phone} already exists `);
      }
      console.log('~ add', add);
      break;

    case 'remove':
      const remove = await contactOperation.removeContact(id);
      console.log('~ remove', remove);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(commander.argv);
