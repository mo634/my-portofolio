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
        const project = await Project.create(body);
        return NextResponse.json({ success: true, data: project });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}
