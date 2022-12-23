import { ProjectModel } from '../schema/Projects.js';

class Projects {
  static async findAll() {
    return ProjectModel.find({});
  }
}

export { Projects };
