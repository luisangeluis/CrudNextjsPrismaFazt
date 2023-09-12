import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = Number(params.id);
  const response = await prisma.task.findUnique({ where: { id } });
  return NextResponse.json({ response });
};

export const PUT = (req, { params }) => {
  const id = params.id;
  return NextResponse.json({ response: `Updated task: ${id}` });
};

export const DELETE = async (req, { params }) => {
  const id = Number(params.id);
  const response = await prisma.task.delete({ where: { id } });
  console.log(response);
  return NextResponse.json({ response: `Deleted task: ${id}` });
};
