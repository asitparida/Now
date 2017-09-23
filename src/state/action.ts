export type Action =
{
    type: 'IMAGE_CHANGED',
    delta: string
} |
{
    type: 'NEWS_AVAIALABLE',
    delta: any
}  |
{
    type: 'FETCH_NEWS'
} ;

export const onImageChanged = (src: string): Action => ({
    type: 'IMAGE_CHANGED',
    delta: src
});

export const onNewsAvailable = (obj: any): Action => ({
    type: 'NEWS_AVAIALABLE',
    delta: obj
});

export const fetchNews = (): Action => ({
    type: 'FETCH_NEWS'
});