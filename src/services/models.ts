export class News {
    category: string = '';
    name: string = '';
    url: string = '';
    thumbnail: string = '';
    description: string = '';
    provider: any = '';
    image: any = '';
    constructor(data: any) {
        let self = this;
        self = Object.assign(self, data);
        if (this.provider && this.provider.length > 0) {
            this.provider = this.provider[0].name;
        }
        if (this.image) {
            this.thumbnail = this.image.thumbnail.contentUrl;
        }
    }
}

export class Card<T> {
    topic: String = '';
    hideCardActions: Boolean = true;
    data: T;
    bgAccent: string = '#f6f6f6';
}