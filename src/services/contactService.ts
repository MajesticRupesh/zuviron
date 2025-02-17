import { ID, Models, Query } from 'appwrite';
import { databases, DATABASE_ID, COLLECTIONS } from '../config/appwrite';

export interface ContactMessage extends Models.Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export const submitContactForm = async (data: Omit<ContactMessage, keyof Models.Document>): Promise<ContactMessage> => {
  try {
    const response = await databases.createDocument<ContactMessage>(
      DATABASE_ID,
      COLLECTIONS.CONTACT_MESSAGES,
      ID.unique(),
      {
        ...data,
        createdAt: new Date().toISOString()
      }
    );
    return response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const getContactMessages = async (): Promise<ContactMessage[]> => {
  try {
    const response = await databases.listDocuments<ContactMessage>(
      DATABASE_ID,
      COLLECTIONS.CONTACT_MESSAGES,
      [
        Query.orderDesc('createdAt')
      ]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    throw error;
  }
};

export const deleteContactMessage = async (id: string): Promise<void> => {
  try {
    await databases.deleteDocument(
      DATABASE_ID,
      COLLECTIONS.CONTACT_MESSAGES,
      id
    );
  } catch (error) {
    console.error('Error deleting contact message:', error);
    throw error;
  }
}; 