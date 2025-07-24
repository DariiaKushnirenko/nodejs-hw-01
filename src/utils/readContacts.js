import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
    try {
        const fileContent = await fs.readFile(PATH_DB, 'utf-8'); 
        const contacts = JSON.parse(fileContent);
        return contacts;
        
    } catch (error) {
        console.error('Error reading file:', error);
        
    }
     
    
};
