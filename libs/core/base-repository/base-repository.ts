import { GetWithMetadataParams } from '@core/get-with-metadata.params';
import { QueryParams } from './../params/query-params';

export abstract class QueryAll<T> {
  abstract getAll?( query?:QueryParams ): Promise<T[] | GetWithMetadataParams<T[]>>
}

export interface QueyById<T> {
   getById?( id: string | number ): Promise<T>
}
export abstract class BaseRepository<T> {
   abstract getAll?( query?:QueryParams ): Promise<T[]>
   abstract getById?( id: string | number ): Promise<T | T[]>
}
