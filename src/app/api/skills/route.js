import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Skills from '@/models/Skills.js';

export async function POST(req) {
    await connectToDatabase();



    try {
        const body = await req.json();

        console.log(body)
        const skill = await Skills.create(body);
        console.log(skill)
        return NextResponse.json({ success: true, data: skill });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function GET() {
    await connectToDatabase();

    try {
        const skills = await Skills.find({});
        console.log(skills)
        return NextResponse.json({ success: true, data: skills });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}


export async function PUT(request) {
    await connectToDatabase();
    console.log("*************************************** ", request.url)
    const parsedUrl = new URL(request.url);
    const id = parsedUrl.searchParams.get('id')
    // console.log(parsedUrl.searchParams.get('id'))
    const { skillName, skillIcon, skillIconLibrary, courseReferences } = await request.json();

    try {
        const updatedSkill = await Skills.findByIdAndUpdate(
            id,
            {
                skillName,
                skillIcon,
                skillIconLibrary,
                courseReferences,
            },
            { new: true }
        );

        if (!updatedSkill) {
            return NextResponse.json({ success: false, error: 'Skill not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedSkill });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}


export async function DELETE(req) {

    await connectToDatabase();

    try {
        const deletedSkill = await Skills.deleteMany({});
        if (!deletedSkill) {
            return NextResponse.json({ success: false, error: 'Skill not found' });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}