import { Client, Databases, Account, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67b24bc5000b4fda10a7');        // Replace with your project ID

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);

// Collection IDs
export const COLLECTIONS = {
    PRODUCT_CATEGORIES: '67b24c54000d74d6b2b1',
    CONTACT_MESSAGES: '67b268d1002b5cea5572' // Replace with your actual collection ID
};

// Database ID
export const DATABASE_ID = '67b24c4b003412d34be0';

// Storage Bucket ID
export const STORAGE = {
    PRODUCT_IMAGES: '67b2634f000f82557196' // Replace with your actual bucket ID
};

export default client; 