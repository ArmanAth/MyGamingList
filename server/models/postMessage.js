import mongoose from 'mongoose';

//schema - give some uniformity to the documents in our db
//new mongoose.schema ? 
const postSchema = mongoose.Schema({
    title: String,
    review: String, 
    creator: String, 
    tags: [String], 
    selectedFile: String, 
    likeCount: {
        type: Number, 
        default: 0 
    },
    rating: {
        type: Number,
        default: 0
    },
    status: String, 
    createdAt: {
        type: Date,
        default: new Date()
    },
}); 

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 