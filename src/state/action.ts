export type Action = 
{
    type: 'INCREMENT_COUNTER',
    delta: number,
} |
{
    type: 'RESET_COUNTER',
} |
{
    type: 'CHANGE_IMAGE',
} |
{
    type: 'IMAGE_CHANGED',
    delta: string
} |
{
    type: 'NEWS_AVAIALABLE',
    delta: any
} ;

export const incrementCounter = (delta: number): Action => ({
    type: 'INCREMENT_COUNTER',
    delta,
});

export const resetCounter = (): Action => ({
    type: 'RESET_COUNTER',
});

export const changeImage = (): Action => ({
    type: 'CHANGE_IMAGE'
});

export const onImageChanged = (src: string): Action => ({
    type: 'IMAGE_CHANGED',
    delta: src
});

export const onNewsAvailable = (obj: any): Action => ({
    type: 'NEWS_AVAIALABLE',
    delta: obj
});
