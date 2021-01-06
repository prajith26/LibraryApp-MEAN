export class AuthorModel{
    constructor(
        public _id: string,
        public name: String,
        public nationality: String,
        public genre: String,
        public works : String,
        public image : String
    ){}
}
