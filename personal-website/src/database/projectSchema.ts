import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
type IProject = {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
  comments: IComment[];
};

export type IComment = {
  user: String;
  comment: string;
  time: Date;
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: true },
  comments: [{
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: false, default: new Date() },
  }],
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
