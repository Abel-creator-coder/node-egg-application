'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/addTask', controller.home.addTask);
  router.post('/api/editTask', controller.home.editTask);
  router.post('/api/updateTaskStatus', controller.home.updateTaskStatus);
  router.post('/api/deleteTask', controller.home.deleteTask);
  router.get('/api/queryTaskList', controller.home.queryTaskList);
};
