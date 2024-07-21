// models/Project.js
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    projectImage: {
        type: String,
        required: true
    },
    projectImageId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    livePreviewLink: {
        type: String,
        required: true,
    },
    technologiesUsed: {
        type: [String],
        required: true,
    },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
