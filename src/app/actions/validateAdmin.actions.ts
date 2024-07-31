"use server"

import cloudinary from "@/lib/cloudinary"

export const validateAdminPassword = async (password: string) => {

    return password === process.env.ADMIN_PASSWORD
}

export const uploadImage = async (file: File, folder: string) => {

    return new Promise(async (resolve, reject) => {
        console.log("Start buffer ")
        const buffer = await file.arrayBuffer()

        console.log("Start BYTES   ")
        const bytes = await Buffer.from(buffer)


        console.log("START CLOUDINARY")
        await cloudinary.uploader.upload_stream({
            resource_type: "auto",
            folder: folder
        }, (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        }).end(bytes)
    })
}