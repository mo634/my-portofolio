import mongoose from 'mongoose';

const uploadImageSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    })

export const uploadImage = mongoose.models.image || mongoose.model('image', uploadImageSchema);