
export class PostObject {
    public _id: string;
    private _title: string;
    private _description: string;
    public _comments: PostObject[];
    private _photoUrl: string;
    private _posterId:string;
    private _likes: number;

    static fromJSON(json): PostObject {
      
        const rec = new PostObject(json.description,json.title, json.comments,json.photoUrl, json.posterId,json.likes);
        var commenten = new Array<PostObject>();
        



        rec.comments.forEach(entry=>{
            var realcomment : PostObject;
            realcomment = new PostObject(entry.description,entry.title,entry._comments,entry.photoUrl,entry.posterid,entry.likes)
            realcomment.id = entry._id;
            console.log(entry._id)
            PostObject.fromJSON(entry);
            commenten.push(realcomment);
        })
        rec.comments = commenten;
       
        rec._id = json._id;
        return rec;
    }

    constructor(description :string,title?: string,  comments?: PostObject[], photoUrl?: string,posterId?:string,likes?:number ) {
        this._title = title;
        this._description = description;
        this._comments = comments || new Array<PostObject>();
        this._photoUrl = photoUrl || null;
        this._posterId = posterId;
        this._likes = likes || 0;
       
    }

    get id(): string {
        return this._id;
    }
    getid():string{
        return this._id;
    }
    set id(id:string){
        this._id = id;
    }
    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get comments(): PostObject[] {
        return this._comments;
    }

    get photoUrl(): string {
        return this._photoUrl;
    }
    set comments(comments:PostObject[]){
        this._comments = comments;
    }
    addComment(comment: PostObject) {
        this._comments.push(comment);
    }
    set description(description: string){
        this._description = description;
    }
    get description(): string{
     return this._description;
    }
    get posterid():string{
        return this._posterId;
    }
    get likes():number{
        return this._likes;
    }
    public upvote(){
        
        this._likes += 1;
        
    }
    public downvote(){
        if(this.likes >0)
        this._likes -=1;
            
    }

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            comments: this._comments,
            photoUrl: this._photoUrl,
            description: this._description,
            posterId:this._posterId,
            likes:this._likes
        };
    }

}
