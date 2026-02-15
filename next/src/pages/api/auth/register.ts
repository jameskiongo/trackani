import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import { RegistrationSchema } from "@/pages/register";
// Import your database client (Prisma, MongoDB, etc.)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Validate input
    const validatedData = RegistrationSchema.parse(req.body);

    // Check if user already exists
    // const existingUser = await prisma.user.findUnique({
    //   where: { email: validatedData.email },
    // });

    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create user in database
    // const user = await prisma.user.create({
    //   data: {
    //     first_name: validatedData.first_name,
    //     last_name: validatedData.last_name,
    //     email: validatedData.email,
    //     password: hashedPassword,
    //   },
    // });

    // Return success (don't send password back!)
    res.status(201).json({
      message: "User created successfully",
      // user: { id: user.id, email: user.email }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
}
