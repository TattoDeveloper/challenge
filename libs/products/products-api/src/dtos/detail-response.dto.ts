import { Result } from "./search-response.dto";

export interface DetailResponseDTO extends Result {
    plain_text: string;
}