import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = Number(params.id);
  const response = await prisma.task.findUnique({ where: { id } });
  console.log({response});
  return NextResponse.json({ response });
};

export const PUT = async (req, { params }) => {
  try {
    const id = Number(params.id);
    const data = await req.json();
    const response = await prisma.task.update({ where: { id }, data });

    return NextResponse.json({ response: `Updated task: ${id}` });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const id = Number(params.id);
    const response = await prisma.task.delete({ where: { id } });

    console.log({ response });
    return NextResponse.json({ response: `Deleted task: ${id}` });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
