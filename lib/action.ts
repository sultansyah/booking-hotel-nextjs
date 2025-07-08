"use server";

import { ContactSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { ContactFormState } from "@/types/contact";

export const ContactMessage = async (
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> => {
    const validatedFields = ContactSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if (!validatedFields.success) {
        return {
            success: false,
            error: validatedFields.error.flatten().fieldErrors,
            values: {
                name: formData.get("name")?.toString() || "",
                email: formData.get("email")?.toString() || "",
                subject: formData.get("subject")?.toString() || "",
                message: formData.get("message")?.toString() || "",
            },
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        await prisma.contact.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        return {
            success: true,
            message: "Thanks for contact us.",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            error: {
                global: ["Terjadi kesalahan server. Coba lagi nanti"],
            },
            values: { name, email, subject, message },
        };
    }
};
