const Service = require('egg').Service;

class TaskService extends Service {
  async createTask(payload) {
    const { ctx } = this;
    return ctx.model.Task.create(payload);
  }

  async getTaskList(payload) {
    const { ctx } = this;
    const { pageNo, pageSize, status } = payload;
    let res = [];
    let count = 0;
    let skip = ((Number(pageNo)) - 1) * Number(pageSize || 10);

    if(status) {
      res = await ctx.model.Task.find({status: status }).skip(skip).limit(Number(pageSize)).sort({ createdAt: -1 }).exec();
      count = res.length;
    } else {
      res = await ctx.model.Task.find({}).skip(skip).limit(Number(pageSize)).sort({ createdAt: -1 }).exec();
      count = res.length;
    }

    // 整理数据源
    let data = res.map((item,i) => {
      const jsonObject = Object.assign({}, item._doc);
      jsonObject.id = i;
      jsonObject.exipre = Number(item.exipre);
      jsonObject.createdAt = this.ctx.helper.formatTime(item.createdAt);
      return jsonObject;
    })

    return { count: count, list: data, pageSize: Number(pageSize), pageNo: Number(pageNo) };
  }

  async editTask(payload) {
    const { ctx } = this;
    const { _id } = payload;
    const task = await ctx.service.task.find(_id);
    if (!task) {
      ctx.throw(404, 'task not found')
    }
    return ctx.model.Task.findByIdAndUpdate(_id, payload)
  }

  async updateTaskStatus(payload) {
    const { ctx } = this;
    const { _id } = payload;
    const task = await ctx.service.task.find(_id);
    if (!task) {
      ctx.throw(404, 'task not found')
    }
    return ctx.model.Task.findByIdAndUpdate(_id, payload)
  }

  async deleteTask(payload) {
    const { ctx } = this;
    const { _id } = payload;
    return ctx.model.Task.remove({ _id });
  }

  async find(id) {
    return this.ctx.model.Task.findById(id);
  }


}
module.exports = TaskService
