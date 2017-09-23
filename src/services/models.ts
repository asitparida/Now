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
export class MailBoxItem {
    title: string = '';
    count: string = '0';
    constructor(data: any) {
        let self = this;
        self = Object.assign(self, data);
    }
}

export class Card<T> {
    topic: String = '';
    data: T;
}
export class CardsHolder {
    title: string = '';
    color: string = '';
    backgroundColor: string = '';
    items:  Card<any>[] = [];
    type: CardHolderType = 0;
    headerIcon: JSX.Element;
}

export  enum CardHolderType {
    NEWS,
    MAILBOX,
    SLACK,
    GIT
}

export function hexToRgb(hex: string): {r: number, g: number, b: number} | null {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}