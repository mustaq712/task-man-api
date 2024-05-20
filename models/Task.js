
const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  priority : {type : Number , default :1}
});
module.exports = mongoose.model('Task', TaskSchema);
