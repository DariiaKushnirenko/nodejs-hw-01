import { readFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const countContacts = async () => {
    try {
        const content = await readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(content);
        return contacts.length;
        
    } catch (error) {
        console.error('Error in counting contacts:', error);
        
    }
 };
(async () => {
    const count = await countContacts();
    console.log('Number of contacts:', count);
})();
