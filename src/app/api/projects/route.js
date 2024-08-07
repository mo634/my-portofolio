import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Project from '../../../models/Project';

export async function GET() {
    await connectToDatabase();

    try {
        const projects = await Project.find({});
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }

}

export async function POST(request) {
    await connectToDatabase();

    try {
        const body = await request.json();
        console.log("technolo used ", body.technologiesUsed)

        const technologiesUsed = body.technologiesUsed
            .map(techString => techString.split(" ")) // Split each string by spaces
            .flat(); // Flatten the array of arrays into a single array
        console.log(technologiesUsed)

        const projectData = { ...body, technologiesUsed };
        console.log(projectData)
        const project = await Project.create(projectData);
        return NextResponse.json({ success: true, data: project });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, error: error.message });
    }
}
export async function DELETE(request) {
    await connectToDatabase();

    try {
        const { searchParams } = new URL(request.url);

        const id = searchParams.get('id');

        // Get the ID from the query parameters and delete project 
        if (id) {
            const project = await Project.findByIdAndDelete(id);

            if (!project) {
                return NextResponse.json({ success: false, message: 'Project not found' });
            }

            return NextResponse.json({ success: true, message: 'Project deleted successfully' });
        }
        // delete all projects if no id provided 
        else {
            const project = await Project.deleteMany();
            return NextResponse.json({ success: true, message: 'Projects deleted successfully' });
        }


    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function PUT(request, { params }) {
    await connectToDatabase();

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    const { projectImage, projectImageId, title, githubLink, description, livePreviewLink, technologiesUsed } = await request.json();

    try {
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                projectImage,
                projectImageId,
                title,
                githubLink,
                description,
                livePreviewLink,
                technologiesUsed,
            },
            { new: true }
        );

        if (!updatedProject) {
            return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedProject });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}