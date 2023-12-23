import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
import { IComment } from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;
  const newSlug = "/blog/" + slug;
  const { user, comment } = await req.json();
  const newComment: IComment = {
    user: user,
    comment: comment,
    time: new Date(Date.now()),
  };

  // return NextResponse.json(newComment)

  try {
    const blog = await Blog.findOne({ slug: newSlug });

    // try {
    //   await Blog.updateOne(
    //     { slug: newSlug },
    //     { $push: { comments: newComment } }
    //   );
    // } catch (err) {
    //   return NextResponse.json("Comment failed to upload", { status: 400 });
    // }

    // return NextResponse.json(blog)
    try {
        await blog.comments.push(newComment);
        await blog.save();
        await console.log(blog);
        return NextResponse.json(blog);
    } catch (err) {
        console.log(err)
        return NextResponse.json(err)
    }
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
