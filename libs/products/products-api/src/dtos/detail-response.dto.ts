import { Result } from './search-response.dto';

export interface DetailResponseDTO extends Result {
    plain_text: string;
    pictures: Record<string, any>[];
    sold_quantity: number;
}