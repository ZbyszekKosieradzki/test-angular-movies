import { Movie } from './movie';


export interface Movies {
    [prop: number]: Movie;
    //dynamiczne klucze

}
//zamiennie
//export type Movies = Array<Movie>;