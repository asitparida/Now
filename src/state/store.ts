export module Store {
    export type Counter = { value: number };
    export type Imager = { imgSrc: string };
    export type News = { items: any[] };
    export type All = {
        counter: Counter,
        imager: Imager,
        news: News
    };
}