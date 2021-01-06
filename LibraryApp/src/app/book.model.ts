export class BookModel{
    constructor(
        public _id: string,
        public title: String,
        public author: String,
        public genre: String,
        public language: String,
        public image : String
    ){}
}
