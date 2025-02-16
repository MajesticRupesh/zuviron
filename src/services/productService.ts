import { ID, Query, Models } from 'appwrite';
import { databases, DATABASE_ID, COLLECTIONS } from '../config/appwrite';

export interface ProductCategory extends Models.Document {
  title: string;
  description: string;
  image: string;
  slug: string;
  details?: {
    features?: string[];
    specifications?: Record<string, string>;
    applications?: string[];
    environmentalImpact?: string[];
    installation?: string[];
    certifications?: string[];
  };
}

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  try {
    const response = await databases.listDocuments<ProductCategory>(
      DATABASE_ID,
      COLLECTIONS.PRODUCT_CATEGORIES,
      [Query.orderAsc('title')]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error;
  }
};

export const getProductBySlug = async (slug: string): Promise<ProductCategory | null> => {
  try {
    const response = await databases.listDocuments<ProductCategory>(
      DATABASE_ID,
      COLLECTIONS.PRODUCT_CATEGORIES,
      [Query.equal('slug', slug)]
    );
    
    if (response.documents.length === 0) {
      return null;
    }
    
    return response.documents[0];
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw error;
  }
};

export const createProductCategory = async (data: Omit<ProductCategory, keyof Models.Document>): Promise<ProductCategory> => {
  try {
    const response = await databases.createDocument<ProductCategory>(
      DATABASE_ID,
      COLLECTIONS.PRODUCT_CATEGORIES,
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error('Error creating product category:', error);
    throw error;
  }
};

export const updateProductCategory = async (id: string, data: Partial<Omit<ProductCategory, keyof Models.Document>>): Promise<ProductCategory> => {
  try {
    const response = await databases.updateDocument<ProductCategory>(
      DATABASE_ID,
      COLLECTIONS.PRODUCT_CATEGORIES,
      id,
      data
    );
    return response;
  } catch (error) {
    console.error('Error updating product category:', error);
    throw error;
  }
};

export const deleteProductCategory = async (id: string): Promise<void> => {
  try {
    await databases.deleteDocument(
      DATABASE_ID,
      COLLECTIONS.PRODUCT_CATEGORIES,
      id
    );
  } catch (error) {
    console.error('Error deleting product category:', error);
    throw error;
  }
}; 