
import { uploadImage } from "@/app/actions/validateAdmin.actions";
import { NextResponse } from "next/server";

export async function POST(request) {

    const formData = await request.formData();
    console.log(formData)

    const image = formData.get('image')

    const data = await uploadImage(image, "project-images")

    console.log("uploaded succes")
    return NextResponse.json({
        success: true,
        data
    }, {
        status: 200
    }
    )
}