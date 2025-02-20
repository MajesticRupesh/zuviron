import { ID, Models, Query } from 'appwrite';
import { databases, DATABASE_ID, COLLECTIONS } from '../config/appwrite';

export interface CaseStudy extends Models.Document {
  title: string;
  slug: string;
  description: string;
  image: string;
  publishedAt: string;
}

export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const response = await databases.listDocuments<CaseStudy>(
      DATABASE_ID,
      COLLECTIONS.CASE_STUDIES,
      [
        Query.orderDesc('publishedAt')
      ]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const response = await databases.listDocuments<CaseStudy>(
      DATABASE_ID,
      COLLECTIONS.CASE_STUDIES,
      [Query.equal('slug', slug)]
    );
    
    if (response.documents.length === 0) {
      return null;
    }
    
    return response.documents[0];
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};

export const createCaseStudy = async (data: Omit<CaseStudy, keyof Models.Document>): Promise<CaseStudy> => {
  try {
    const response = await databases.createDocument<CaseStudy>(
      DATABASE_ID,
      COLLECTIONS.CASE_STUDIES,
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export const updateCaseStudy = async (id: string, data: Partial<Omit<CaseStudy, keyof Models.Document>>): Promise<CaseStudy> => {
  try {
    const response = await databases.updateDocument<CaseStudy>(
      DATABASE_ID,
      COLLECTIONS.CASE_STUDIES,
      id,
      data
    );
    return response;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

export const deleteCaseStudy = async (id: string): Promise<void> => {
  try {
    await databases.deleteDocument(
      DATABASE_ID,
      COLLECTIONS.CASE_STUDIES,
      id
    );
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
}; 