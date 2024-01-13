import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import { IComment } from "@/database/projectSchema";

type IParams = {
  params: {
    name: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { name } = params;
  const link = "/portfolio/" + name;
  const { user, comment } = await req.json();
  const newComment: IComment = {
    user: user,
    comment: comment,
    time: new Date(Date.now()),
  };

  try {
    const project = await Project.findOne({ link: link });

    // return NextResponse.json(project.comments)

    try {
      await project.comments.push(newComment);
      await project.save();
      await console.log(project);
      return NextResponse.json(project);
    } catch (err) {
      console.log(err);
      return NextResponse.json(err);
    }
  } catch (err) {
    // return NextResponse.json("Project not found.", { status: 404 });
    return NextResponse.json(err);
  }
}
