module.exports = app => {
    const mongoose = app.mongoose;
    const taskSchema = new mongoose.Schema({
      title: { type: String, required: true },
      exipre: { type: String, required: true },
      content: { type: String, required: true },
      auther:{ type: String, required: true },
      status:{ type: Number, required: true },
      createdAt: { type: Date, default: Date.now },
    });
    return mongoose.model('Task', taskSchema);
  }
