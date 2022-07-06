export abstract class BaseRepository<T> {
   abstract getById( id: string ): Promise<T>
}
