import createFakeContact from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';
import { writeFile, readFile } from "node:fs/promises";

export const addOneContact = async () => { 
    
    try {
        const data = await readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);

        await writeFile(PATH_DB, JSON.stringify(contacts, null, 1), 'utf-8');

        console.log('Contact added successfully:', newContact);
    } catch (error) {
        console.error('Error while adding single contact:', error);
  }

};

addOneContact();
