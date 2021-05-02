import  mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : String,
    content: String,
    image:String,
    date: {
        type: Date,
        default: new Date(),
    },
})

const Post = mongoose.model("Post",postSchema);

export default Post;

