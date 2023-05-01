// Acá voy a tener las declaraciones de app type-interface
export interface movieResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    comment: string;
    nameUser: string;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ko = "ko",
    Nl = "nl",
}

interface commentState {
    idMovie: number
    nameUser: string,
    comments: string
}
