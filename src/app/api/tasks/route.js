import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const tasks = await prisma.task.findMany();
  console.log({ tasks });
  return NextResponse.json({response:tasks});
};
export const POST = async(req) =>{ 
  const data = await req.json();

  if(!data.title || !data.description) return NextResponse.json({message:"Missing data"})

  const response = await prisma.task.create({
    data:{
      title:data.title,
      description:data.description
    }
  })

  return NextResponse.json({response});
}
export const PUT = () => NextResponse.json("PUT tasks");
export const PATCH = () => NextResponse.json("PATCH tasks");
export const DELETE = () => NextResponse.json("DELETE tasks");
