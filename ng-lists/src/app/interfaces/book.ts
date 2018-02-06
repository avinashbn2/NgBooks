import { Author } from './author';
export interface Book {
    title?: string;
    description?: string;
    rating?: number;
    favourite?: boolean;
    author?: Author[];
    cover?: string;
}
