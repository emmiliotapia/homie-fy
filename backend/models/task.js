// backend/models/task.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' },
  reward: {
    experiencePoints: { type: Number, default: 0 },
    monetaryReward: { type: Number, default: 0 }
  },
  validation: {
    validatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isValid: { type: Boolean, default: false }
  }
});

module.exports = mongoose.model('Task', taskSchema);
