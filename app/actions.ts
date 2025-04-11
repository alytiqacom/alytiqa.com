"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendEmail } from "@/lib/email";

interface FormState {
  success: boolean;
  error: string | null;
  id?: string;
  pending?: boolean;
}

export async function submitSignupForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const email = formData.get("email") as string;

    if (!email) {
      return { success: false, error: "Email is required", pending: false };
    }

    const docRef = await addDoc(collection(db, "signups"), {
      email,
      createdAt: serverTimestamp(),
    });

    return { success: true, error: null, id: docRef.id, pending: false };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: "Failed to submit form", pending: false };
  }
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const message = formData.get("message") as string;

    if (!email || !firstName || !lastName || !message) {
      return {
        success: false,
        error: "All fields are required",
        pending: false,
      };
    }

    const result = await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    return { success: true, error: null, pending: false };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit form", pending: false };
  }
}
