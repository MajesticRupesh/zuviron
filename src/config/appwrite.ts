import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67b24bc5000b4fda10a7');        // Replace with your project ID

export const databases = new Databases(client);

// Collection IDs
export const COLLECTIONS = {
    PRODUCT_CATEGORIES: '67b24c54000d74d6b2b1'
};

// Database ID
export const DATABASE_ID = '67b24c4b003412d34be0';

export default client; 