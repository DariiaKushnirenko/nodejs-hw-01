import { buffer } from 'node:stream/consumers';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
    const data = buffer;
    try {
        await fs.writeFile(PATH_DB, data, 'utf8');
        
    } catch (error) {
        console.error('Error ocurred', error);        
    }
};
