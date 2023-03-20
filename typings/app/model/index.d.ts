// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportTask = require('../../../app/model/task');

declare module 'egg' {
  interface IModel {
    Task: ReturnType<typeof ExportTask>;
  }
}
