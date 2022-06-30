/* eslint-disable no-undef */
// import sha256 from 'crypto-js/sha256'
import 'isomorphic-fetch'

export interface RequestOptions<T = any>{
  method?: string;
  headers?: Record<string, string>;
  body?: T;
}

export interface HttpRequest {
  url?: string
  options?: RequestOptions
}


export const httpClient = async ({ url }: HttpRequest ) => {

  const requestOptions:any = {
    method: 'GET',
    headers: {
      'accept': 'application/json'
    }
  }

  const query = await fetch( `${url}`, requestOptions )
  return query.json()
}
