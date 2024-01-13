import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";

type IParams = {
  params: {
    name: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { name } = params; // another destructure
  const link = "/portfolio/" + name;

  try {
    const project = await Project.findOne({ link: link }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}
