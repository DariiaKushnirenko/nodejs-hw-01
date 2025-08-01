import { PATH_DB } from '../constants/contacts.js';
import { writeFile, readFile } from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length === 0) {
      console.log('Nothing to remove');
      return;
    }
    contacts.pop();
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 1), 'utf-8');
  } catch (error) {
    console.error('Could not remove all contacts:', error);
  }
};

removeLastContact();
