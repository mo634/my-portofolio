// models/Skill.js
import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillIcon: {
    type: String,
    required: true,
  },
  skillIconLibrary: {
    type: String,
    required: true,
  },
  courseReferences: [
    {
      type: String,
    },
  ],
});

export default mongoose.models.Skills || mongoose.model('Skills', SkillSchema);
