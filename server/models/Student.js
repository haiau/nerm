import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: 'String', required: true },
  sid: { type: 'String', required: true },
  email: { type: 'String', required: true }
});

export default mongoose.model('Student', StudentSchema);
