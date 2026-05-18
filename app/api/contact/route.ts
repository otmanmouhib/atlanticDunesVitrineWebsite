import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  const { name, email, phone, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Les champs Nom, Email et Message sont obligatoires." },
      { status: 400 }
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB || "atlanticdunes");
  const contacts = db.collection("contacts");

  const contactDoc = {
    name,
    email,
    phone: phone || null,
    message,
    status: "new",
    createdAt: new Date(),
  };

  const result = await contacts.insertOne(contactDoc);

  return NextResponse.json({ success: true, id: result.insertedId.toString() });
}
