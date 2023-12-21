import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB(); // function from db.ts before
    const { slug } = params; // another destructure
    const newSlug = "/blog/" + slug

    try {
      const blog = await Blog.findOne({ slug: newSlug }).orFail();
      return NextResponse.json(blog);
    } catch (err) {
      return NextResponse.json("Blog not found.", { status: 404 });
    }
}
