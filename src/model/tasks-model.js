import { CONST_DATA } from '../mock/const-data.js';
import { getRandomTask } from '../mock/task.js';
import { util } from '../util.js';

const TASK_COUNT = util.getRandomCount(CONST_DATA.countLimit);

export default class TasksModel {
  tasks = Array.from({ length: TASK_COUNT }, getRandomTask);

  getTasks() {
    return this.tasks;
  }
}
