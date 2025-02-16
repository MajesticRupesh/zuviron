import { databases, DATABASE_ID, COLLECTIONS } from '../config/appwrite';
import { Query, Models } from 'appwrite';

export interface ProductCategory extends Models.Document {
    title: string;
    description: string;
    image: string;
    slug: string;
}

export const getProductCategories = async (): Promise<ProductCategory[]> => {
    try {
        const response = await databases.listDocuments<ProductCategory>(
            DATABASE_ID,
            COLLECTIONS.PRODUCT_CATEGORIES,
            [
                Query.orderDesc('$createdAt'),
                Query.limit(100)
            ]
        );
        
        return response.documents;
    } catch (error) {
        console.error('Error fetching product categories:', error);
        return [];
    }
}; 