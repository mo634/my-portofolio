"use server"
export const validateAdminPassword =async (password: string) =>{
    console.log(process.env.ADMIN_PASSWORD)
    return password === process.env.ADMIN_PASSWORD
}

