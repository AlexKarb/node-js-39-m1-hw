const fs = require('fs/promises');

async function readFile(contactsPath) {
  try {
    const res = await fs.readFile(contactsPath, 'utf-8');
    return await JSON.parse(res);
  } catch (err) {
    throw new Error("can't read file");
  }
}

async function writeInFile(contactsPath, data) {
  try {
    fs.writeFile(contactsPath, JSON.stringify(data));
  } catch (err) {
    throw new Error("can't write in file");
  }
}

module.exports = { readFile, writeInFile };
