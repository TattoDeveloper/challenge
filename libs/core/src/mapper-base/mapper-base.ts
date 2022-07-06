export abstract class Mapper <T, K> {
   protected abstract createMap( params: T, key?: string ): K
   public create( params: T, key?:string ): K | [] {
     if ( !params ) {
       throw new Error( 'Error to get data' );
     }

     return this.createMap( params, key );
   }
}
