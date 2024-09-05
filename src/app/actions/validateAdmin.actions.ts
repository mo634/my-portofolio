"use server"

export const validateAdminPassword = async (password: string) => {

    return password === process.env.ADMIN_PASSWORD
}