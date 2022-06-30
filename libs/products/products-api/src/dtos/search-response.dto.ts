
export interface FilterValues {
    id: string;
    name: string;
    path_from_root?: FilterValues[];
}

export interface Filters {
    name?: string;
    values: FilterValues[]
}

export interface Result {
    id: string;
    price: number,
    title: string;
    currency_id: string;
    category_id: string;
    thumbnail: string;
    condition: string;
    shipping: Record<string, string>
}


export interface SearchResponseDTO {
    results: Result[]
    filters: Filters[]
}