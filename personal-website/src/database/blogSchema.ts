import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
type IBlog = {
    title: string;
    date: Date;
    description: string;
    slug: string; 
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    slug: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;