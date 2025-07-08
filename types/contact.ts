export type ContactFormState = {
    success: boolean,
    message?: string,
    error?: Record<string, string[]>,
    values?: {
        name: string,
        email: string,
        subject: string,
        message: string
    }
}