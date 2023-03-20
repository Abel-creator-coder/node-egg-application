'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async addTask() {
    const { ctx } = this;
    ctx.validate({
      title: { type: 'string' },
      exipre: { type: 'number' },
      content: { type: 'string' },
      auther:{ type: 'string' },
      status: { type: 'number' }
    });
    const taskBody = ctx.request.body;
    const res = await this.service.task.createTask(taskBody);
    ctx.helper.success({ctx, res});
  }

  async editTask() {
    const { ctx } = this;
    ctx.validate({
      _id: { type: 'string' },
      title: { type: 'string' },
      exipre: { type: 'number' },
      content: { type: 'string' },
      auther:{ type: 'string' }
    });
    const taskBody = ctx.request.body;
    const res = await this.service.task.editTask(taskBody);
    ctx.helper.success({ctx, res});
  }

  async updateTaskStatus() {
    const { ctx } = this;
    ctx.validate({
      _id: { type: 'string' },
      status: { type: 'number' }
    });
    const taskBody = ctx.request.body;
    const res = await this.service.task.updateTaskStatus(taskBody);
    ctx.helper.success({ctx, res});
  }

  async deleteTask() {
    const { ctx } = this;
    ctx.validate({
      _id: { type: 'string' }
    });
    const taskBody = ctx.request.body;
    const res = await this.service.task.deleteTask(taskBody);
    ctx.helper.success({ctx, res});
  }

  async queryTaskList() {
    const { ctx } = this;
    const query = ctx.query;
    const res = await this.service.task.getTaskList(query);
    ctx.helper.success({ctx, res});
  }
}

module.exports = HomeController;
