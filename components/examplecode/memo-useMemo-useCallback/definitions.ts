export interface IElem {
    "id": string,
    "fields": {
        "company": string,
        "colors": [
            string, string
        ],
        "featured": boolean,
        "price": number,
        "name": string,
        "image": [
            {
                "id": string,
                "url": string,
                "filename": string,
                "size": number,
                "type": string,
                "thumbnails": {
                    "small": {
                        "url": string,
                        "width": number,
                        "height": number
                    },
                    "large": {
                        "url": string,
                        "width": number,
                        "height": number
                    },
                    "full": {
                        "url": string,
                        "width": number,
                        "height": number
                    }
                }
            }
        ]
    }
}