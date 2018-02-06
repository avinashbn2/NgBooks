import {Actor} from './actor';
export interface Movie {
    name?: string;
    description?: string;
    rating?: number;
    boxOffice?: number;
    favourite?: boolean;
    actor?: Actor[];
    image?: string;
}
