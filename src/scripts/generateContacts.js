import createFakeContact from '../utils/createFakeContact.js';
import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    try {
        const content = await readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(content);
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const updatedContacts = [...contacts, newContacts];
        await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 1), 'utf-8');
        
        console.log('${number} of contacts added succesfully');
    } catch (error) {
        console.error('Error while generating contacts:', error);
    }
};
generateContacts(5);